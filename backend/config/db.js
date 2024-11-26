const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DB_URL;

exports.connectDB = async () => {
  try {
    await mongoose.connect(DB_URL)
    .then(()=>{
        console.log("db connected");
    });
    // console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    process.exit(1); // Exiting the process if DB connection fails
  }
};
