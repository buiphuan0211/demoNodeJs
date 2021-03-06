const courseModel = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class CoursesController {
    // [GET]/courses
    coursePage(req, res, next) {
        courseModel
            .find({}) // promise
            .then((courses) => {
                res.render("course/coursePage", {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => next(err));
    }

    // [GET] /courses/:slug
    show(req, res, next) {
        courseModel
            .findOne({ slug: req.params.slugCourse })
            .then((course) => {
                res.render("course/show", {
                    course: mongooseToObject(course),
                });
                // res.json(course);
            })
            .catch((err) => next(err));
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render("course/create");
    }

    // [post] /courses/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        const course = new courseModel(formData);
        course
            .save()
            .then(() => res.redirect("/courses"))
            .catch(next);
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        courseModel
            .findById(req.params.id)
            .then((course) => {
                res.render("course/edit", {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        courseModel
            .updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }

    //[DELETE] /courses/:id
    destroy(req, res, next) {
        courseModel
            .delete({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        courseModel
            .restore({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }

    //[DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        courseModel
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }

    //[POST] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case "delete":
                courseModel
                    .delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect("back"))
                    .catch(next);
                break;
            default:
                res.message("Action invalid");
        }
    }
}
module.exports = new CoursesController();
