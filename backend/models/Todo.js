const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  desc: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  taskDate: {
    type: String, // Changed to String for easier handling with form inputs
    required: [true, 'Task date is required']
  },
  taskTime: {
    type: String,
    required: [true, 'Task time is required']
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Add indexes for better performance on Atlas
todoSchema.index({ createdAt: -1 });
todoSchema.index({ completed: 1 });

module.exports = mongoose.model('Todo', todoSchema);