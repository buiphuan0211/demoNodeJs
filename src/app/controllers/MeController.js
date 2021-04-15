const courseModel = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class CoursesController {
    // [GET] /stored/course
    storedCourses(req, res, next) {
        courseModel
            .find({})
            .then((course) =>
                res.render("me/stored-courses", {
                    course: mutipleMongooseToObject(course),
                })
            )
            .catch((error) => next(err));
    }
}

module.exports = new CoursesController();