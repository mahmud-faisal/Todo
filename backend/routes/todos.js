const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// @desc    Get all todos
// @route   GET /api/todos
// @access  Public
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
});

// @desc    Create a new todo
// @route   POST /api/todos
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { title, desc, taskDate, taskTime } = req.body;

    // Validation
    if (!title || !desc || !taskDate || !taskTime) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide title, description, date, and time' 
      });
    }

    const todo = new Todo({
      title,
      desc,
      taskDate,
      taskTime
    });

    const savedTodo = await todo.save();
    
    res.status(201).json({
      success: true,
      data: savedTodo
    });
  } catch (error) {
    console.error('Error creating todo:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        success: false,
        message: 'Validation error', 
        error: error.message 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
});

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    // Validate MongoDB ID format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid todo ID format' 
      });
    }

    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({ 
        success: false,
        message: 'Todo not found' 
      });
    }

    await Todo.findByIdAndDelete(req.params.id);
    
    res.json({ 
      success: true,
      message: 'Todo deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
});

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const { title, desc, taskDate, taskTime, completed } = req.body;
    
    // Validate MongoDB ID format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid todo ID format' 
      });
    }
    
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({ 
        success: false,
        message: 'Todo not found' 
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: title || todo.title,
        desc: desc || todo.desc,
        taskDate: taskDate || todo.taskDate,
        taskTime: taskTime || todo.taskTime,
        completed: completed !== undefined ? completed : todo.completed
      },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updatedTodo
    });
  } catch (error) {
    console.error('Error updating todo:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        success: false,
        message: 'Validation error', 
        error: error.message 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
});

// @desc    Toggle todo completion status
// @route   PATCH /api/todos/:id/toggle
// @access  Public
router.patch('/:id/toggle', async (req, res) => {
  try {
    // Validate MongoDB ID format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid todo ID format' 
      });
    }

    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({ 
        success: false,
        message: 'Todo not found' 
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: !todo.completed },
      { new: true }
    );

    res.json({
      success: true,
      data: updatedTodo
    });
  } catch (error) {
    console.error('Error toggling todo:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
});

module.exports = router;