const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Todo',todoSchema);