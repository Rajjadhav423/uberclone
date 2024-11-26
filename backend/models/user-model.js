const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name should be at least 3 characters long"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "Last name should be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
    select: false, 
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Add expiration for better security
  return token;
};


userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare the given password with stored hash
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10); // Hash the password using bcrypt
};

module.exports = mongoose.model("User", userSchema); // Use a singular, capitalized model name
