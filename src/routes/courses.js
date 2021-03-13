const express = require('express');
const routes = express.Router();

const coursesController = require('../app/controllers/CoursesController');


routes.post('/store',coursesController.store);
routes.get('/create',coursesController.create);
routes.get('/:slugCourse', coursesController.show);
routes.get('/', coursesController.coursePage);

module.exports = routes;
