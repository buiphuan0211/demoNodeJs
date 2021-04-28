const courseModel = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { render } = require("node-sass");
class MeController {
    storedCourses(req, res, next) {
        let courseQuery = courseModel.find({});

        if (req.query.hasOwnProperty("_sort")) {
            const isValidType = ["asc", "desc"].includes(req.query.type);
            
            courseQuery = courseQuery.sort({
                [req.query.column]: isValidType ? req.query.type : "desc"
            });
        }

        Promise.all([courseQuery, courseModel.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render("me/stored-courses", {
                    courses: mutipleMongooseToObject(courses),
                    deletedCount,
                })
            )
            .catch((error) => next);

        // // get count-Course-deleted
        // courseModel
        //     .countDocumentsDeleted()
        //     .then((deleteCourse) => {
        //         console.log(deleteCourse);
        //     })
        //     .catch((error) => next);

        // // [GET] /stored/course
        // courseModel
        //     .find({})
        //     .then((course) =>
        //         res.render("me/stored-courses", {
        //             course: mutipleMongooseToObject(course),
        //         })
        //     )
        //     .catch((error) => next(err));
    }

    // [GET] /trash/course
    trashCourses(req, res, next) {
        courseModel
            .findDeleted({})
            .then((courses) =>
                res.render("me/trash-courses", {
                    courses: mutipleMongooseToObject(courses),
                })
            )
            .catch((error) => next(err));
    }
}

module.exports = new MeController();
