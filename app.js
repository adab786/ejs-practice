//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const { response } = require("express");

const homeStartingContent =
  " http://localhost:3000/compose                       Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "And the crime of teenagers until the price of the Olympics is wise. The range of the urn is neither cartoon nor just vengeful. Let us live with the bow of the bow, and drink the cat. The customer's choice is sad. Laughter cartoon boxes at in the earth the entire immune system. The tips of the arrows do not take any Vikings to drink the bow of life. You can create a lot of love from time to time. Now the arrows, but not the lake. Sometimes the pain is placed on the Internet itself, it is important to the main customer. The cushion is not an integral element. The vengeful pregnant woman said that there was no way to invest. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor put down and so that the consequences will always be monitored for free.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
let posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("home", {
    StartingContent: homeStartingContent,
    star: posts,
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    contact: contactContent,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutus: aboutContent });
});
app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/post/:test", function (req, res) {
  const postroute = _.lowerCase(req.params.test);
  posts.forEach((tri) => {
    const titleofcompose = _.lowerCase(tri.title);
    if (postroute === titleofcompose) {
      res.render("post", {
        Title: tri.title,
        Content: tri.post,
      });
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.post("/compose", function (req, res) {
  let response = { title: req.body.file, post: req.body.multiline };
  res.redirect("/");
  posts.push(response);
});
