const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan");
const handlebars = require("express-handlebars");
const { extname, dirname } = require("path");
const path = require("path");

const route = require("./routes/routes_index");
const db = require("./config/db/index");

const methodOverride = require("method-override");

const SortMiddleware = require("./app/middlewares/SortMiddleware");

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Custom MiddleWares
app.use(SortMiddleware);

// Connect DB
db.connect();

route(app);

// Template engine
app.engine(
    ".hbs", 
    handlebars({
        extname: ".hbs",
        helpers: require("./helpers/handlebars")
    })
);

app.use(methodOverride("_method"));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
