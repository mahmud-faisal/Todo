const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

// Get Todo
router.get('/',async(req,res)=>{
try{
const todos = await Todo.find().sort({createdAt:-1});
res.json(todos);
}
catch(err){
res.status(500).json({message:err.message});
}
});

// Create new todo
router.post('/',async(req,res)=>{
 const todo = new Todo({
    title: req.body.title,
    desc: req.body.desc
 });

try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo)
} catch (err) {
    res.status(400).json({message: err.message})
}

})

//  Delete Todo
router.delete('/:id',async(req,res)=>{
    console.log('Checeking:');
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo)return res.status(404).json({
            message: "Todo not found"
        });
        await todo.remove();
        res.json({message: "Todo deleted"});
    }
     catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
})


module.exports = router;