const express = require('express');
const routes = express.Router();

const coursesController = require('../app/controllers/CoursesController');
routes.get('/create', coursesController.create);
routes.post('/store', coursesController.store);
routes.post('/:id', coursesController.destroy); // delete course
routes.get('/:id/edit', coursesController.edit);
routes.post('/:id', coursesController.update); // update course
routes.get('/:slugCourse', coursesController.show);
 routes.get('/', coursesController.coursePage);

module.exports = routes;