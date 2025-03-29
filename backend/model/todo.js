const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    taskDate: {
        type: String,  // Storing as String (YYYY-MM-DD format)
        required: true
    },
    taskTime: {
        type: String,  // Storing as String (HH:MM format)
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("TodoTasks", todoSchema);