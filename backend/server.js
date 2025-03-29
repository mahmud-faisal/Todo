const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const mongoose = require('mongoose')
const todoRouter = require('./routes/todoRoutes')



const app = express()

// middlewares
app.use(cors())
app.use(bodyParser.json())

// dbConnect
const dbURL = 'mongodb://localhost:27017/todoapp';
const connectDB =async()=>{
try {
    await mongoose.connect(dbURL);
    console.log("DB connected")
} catch (error) {
    console.log('error occured!');
    console.log(error.message);
    process.exit(1)
}
}

// 
app.use('/api/todos',todoRouter);

const PORT = process.env.PORT || 3001

app.listen(PORT,(req,res)=>{
    connectDB();
    console.log(`server is running at http://127.0.0.1:${PORT}`)
})