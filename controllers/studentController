const Student = require('../models/studentModel');

// @desc    Get all students
// @route   GET /students
// @access  Public
exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    
    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single student by ID
// @route   GET /students/:id
// @access  Public
exports.getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID format'
      });
    }
    next(error);
  }
};

// @desc    Create new student
// @route   POST /students
// @access  Public
exports.createStudent = async (req, res, next) => {
  try {
    const { name, course, age, city } = req.body;
    
    // Create new student
    const student = await Student.create({
      name,
      course,
      age,
      city
    });
    
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: student
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages
      });
    }
    next(error);
  }
};

// @desc    Update student
// @route   PUT /students/:id
// @access  Public
exports.updateStudent = async (req, res, next) => {
  try {
    const { name, course, age, city } = req.body;
    
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, course, age, city },
      {
        new: true, // Return updated document
        runValidators: true // Run schema validators
      }
    );
    
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: student
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages
      });
    }
    if (error.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID format'
      });
    }
    next(error);
  }
};

// @desc    Delete student
// @route   DELETE /students/:id
// @access  Public
exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: {}
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID format'
      });
    }
    next(error);
  }
};

