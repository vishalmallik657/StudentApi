const mongoose = require('mongoose');

// Define Student Schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    course: {
      type: String,
      required: [true, 'Course is required'],
      trim: true,
      minlength: [2, 'Course must be at least 2 characters long']
    },
    age: {
      type: Number,
      min: [10, 'Age must be at least 10'],
      max: [100, 'Age cannot exceed 100']
    },
    city: {
      type: String,
      trim: true,
      maxlength: [50, 'City name cannot exceed 50 characters']
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Export the model
module.exports = mongoose.model('Student', studentSchema);

