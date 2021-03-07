
class CoursesController {
    // [GET] /home
    show(req, res) {
        res.send('Welcome');
    }
}

module.exports = new CoursesController();
