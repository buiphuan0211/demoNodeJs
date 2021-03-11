const express = require('express');
const routes = express.Router();

const coursesController = require('../app/controllers/CoursesController');

routes.get('/:slugCourse', coursesController.show);
routes.get('/', coursesController.coursePage);

module.exports = routes;
