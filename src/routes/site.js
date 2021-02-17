const express = require("express");
const routes = express.Router();

const siteController = require("../app/controllers/SiteController");

routes.use("/search", siteController.search);
routes.use("/", siteController.home);

module.exports = routes;
