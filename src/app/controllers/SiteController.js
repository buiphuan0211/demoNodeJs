const CourseModel = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /home
    home(req, res, next) {
        res.render('home');

        // CourseModel.find({}, (err, course) => { // callback
        //     if (!err) return res.json(course);
        //     next(err);
        // });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
