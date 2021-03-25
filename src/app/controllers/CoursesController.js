const courseModel = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class CoursesController {

    //[PUT] /courses/:id
    update(req, res, next) {
            res.json(req.body);
        }
        //[GET] /courses/:id/edit
    edit(req, res, next) {
        courseModel.findById(req.params.id)
            .then(course => {
                res.render('course/edit', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    // [post] /courses/store
    store(req, res, next) {
            const formData = req.body;
            const course = new courseModel(formData);
            course
                .save()
                .then(() => res.redirect('/courses'))
                .catch((err) => {});
        }
        // [GET] /course/create
    create(req, res, next) {
        res.render('course/create');
    }

    // [GET] /courses/:slug
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

    // [GET]/courses
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