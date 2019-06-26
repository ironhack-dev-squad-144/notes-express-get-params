const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// To add a new HBS tool: {{#ifEquals value1 value2}}...{{/ifEquals}}
hbs.registerHelper("ifEquals", function(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

app.get("/", (req, res, next) => {
  res.render("index");
});

// Route "http://localhost:3000/user-info/AnyPossibleUsername"
app.get("/user-info/:tomato", (req, res, next) => {
  res.render("user-info", {
    username: req.params.tomato 
  });
});

app.get("/lang", (req, res, next) => {
  res.render("lang");
});

app.get("/lang-output", (req, res, next) => {
  res.render("lang-output", {
    lang: req.query.language
  });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
