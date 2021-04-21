const express = require("express");
const routes = express.Router();

const coursesController = require("../app/controllers/CoursesController");
routes.get("/create", coursesController.create);
routes.post("/store", coursesController.store);
routes.post("/handle-form-actions", coursesController.handleFormActions);
routes.post("/:id", coursesController.destroy); // delete course
routes.get("/:id/edit", coursesController.edit);
routes.post("/:id", coursesController.update); // update course
routes.post("/:id/restore", coursesController.restore); // restore course in trash can - method Patch
routes.post("/:id/force", coursesController.forceDestroy); // delete course in trash can - method Delete
routes.get("/:slugCourse", coursesController.show);
routes.get("/", coursesController.coursePage);

module.exports = routes;
