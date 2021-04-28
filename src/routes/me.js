const express = require('express');
const routes = express.Router();

const MeController = require('../app/controllers/MeController.js');


routes.get('/stored/courses', MeController.storedCourses);
routes.get('/trash/courses',MeController.trashCourses);

module.exports = routes;