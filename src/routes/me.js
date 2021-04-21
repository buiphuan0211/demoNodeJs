const express = require('express');
const routes = express.Router();

const meController = require('../app/controllers/MeController.js');


routes.get('/stored/courses', meController.storedCourses);
routes.get('/trash/courses',meController.trashCourses);

module.exports = routes;