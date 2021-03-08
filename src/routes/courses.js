const express = require('express');
const routes = express.Router();

const coursesController = require('../app/controllers/CoursesController');

routes.get('/:slug', coursesController.show);

module.exports = routes;
