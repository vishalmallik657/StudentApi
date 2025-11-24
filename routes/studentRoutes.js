const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

// Routes
router.route('/')
  .get(getAllStudents)      // GET /students
  .post(createStudent);     // POST /students

router.route('/:id')
  .get(getStudentById)      // GET /students/:id
  .put(updateStudent)       // PUT /students/:id
  .delete(deleteStudent);   // DELETE /students/:id

module.exports = router;
