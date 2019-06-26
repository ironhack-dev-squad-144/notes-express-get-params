const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// To add a new HBS tool: {{#ifEquals value1 value2}}...{{/ifEquals}}
hbs.registerHelper("ifEquals", function(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/book-info", (req, res, next) => {
  res.render("book-info");
});

app.get("/user-info", (req, res, next) => {
  res.render("user-info");
});

app.get("/lang", (req, res, next) => {
  res.render("lang");
});

app.listen(3000, () => console.log("App listening on port 3000!"));
