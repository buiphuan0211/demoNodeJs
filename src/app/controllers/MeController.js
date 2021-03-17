const courseModel = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class CoursesController {
    // [GET] /stored/course
    storedCourses(req, res, next) {
        res.render('me/stored-courses');
    }
}

module.exports = new CoursesController();