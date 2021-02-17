const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const { extname } = require("path");
const path = require("path");

const routes = require("./routes/routes_index");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

routes(app);

// Template engine
app.engine(".hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
