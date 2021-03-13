
const courseModel = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class CoursesController {

     // [post] /course/store
     store(req, res, next) {
            res.json(req.body);
}
      // [GET] /course/create
      create(req, res, next) {
            res.render('course/create');
    }

    // [GET] /course/:slug
    show(req, res, next) {
        courseModel
            .findOne({ slug: req.params.slugCourse })
            .then((course) => {
                res.render('course/show', {
                    course: mongooseToObject(course),
                });
                // res.json(course);
            })
            .catch((err) => next(err));
    }

    // [GET]/course
    coursePage(req, res, next) {
        courseModel
            .find({}) // promise
            .then((courses) => {
                res.render('course/coursePage', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => next(err));
    }
}

module.exports = new CoursesController();
