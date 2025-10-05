const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB Atlas connection error:', error);
    process.exit(1);
  }
};

// MongoDB connection events
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB Atlas disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB Atlas connection error:', err);
});

module.exports = connectDB;