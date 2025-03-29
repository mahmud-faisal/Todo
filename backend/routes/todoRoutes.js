const express = require('express');
const router = express.Router();
const TodoTasks = require('../model/todo'); // Fixed variable name to match your export

// GET all todos
router.get('/', async (req, res) => {
    try {
        const todos = await TodoTasks.find().sort({taskDate:1});
        res.json(todos);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

// POST new todo
router.post('/', async (req, res) => {
    try {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(req.body.taskDate)) {
            return res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD" });
        }

        if (!/^\d{2}:\d{2}$/.test(req.body.taskTime)) {
            return res.status(400).json({ message: "Invalid time format. Use HH:MM" });
        }

        const newTodo = new TodoTasks({
            title: req.body.title,
            desc: req.body.desc,
            taskDate: req.body.taskDate,
            taskTime: req.body.taskTime
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE todo
router.delete('/:id', async (req, res) => {
    try {
        const todo = await TodoTasks.findById(req.params.id);
        if (!todo) return res.status(404).json({message:"Todo not found"});

        await TodoTasks.findByIdAndDelete(req.params.id);
        res.json({message:'Deleted successfully'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

module.exports = router;