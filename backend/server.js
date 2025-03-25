const express = require('express')
const cors= require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const todoRoutes = require('./routes/todos')

const app = express();
// middlewares
app.use(cors());
app.use(bodyParser.json())

// DB connection
const dbURI = 'mongodb://localhost:27017/todoapp';

const connectDB = async()=>{
    try {
        await mongoose.connect(dbURI);
    console.log("DB is connected");
    } catch (error) {
        console.log('error occured!');
        console.log(error.message);
        process.exit (1);
    }
}

// Routers
app.use('/api/todos',todoRoutes);
// Start Server
const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    connectDB();
    console.log(`server running: http://127.0.0.1:${PORT}`);

})