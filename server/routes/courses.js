import express from 'express';

// As you create new routes, simply import them from their corresponding files
// This is the modular and extensible Node.js approach to building web applications
// and web APIs
import { getCourses, addCourse } from '../controllers/course.js';

const router = express.Router();

// GET routes
// GET /courses - retrieves a list of courses
// GET /courses/:id - retrieves a specific course
router.get('/', getCourses);
// router.get('/:id', getCourse);

// POST routes
// POST /courses - creates a course
router.post('/', addCourse);

// PUT routes
// PUT /courses/:id - updates a specific course (replacement)
// router.put('/:id', replaceCourse);

// PATCH routes
// PATCH /courses/:id - partially updates a specific course (modification)
// router.patch('/:id', updateCourse);

// DELETE routes
// DELETE /tickets/{id} - deletes a specific course
// router.delete('/:id', deleteCourse);

export default router;
