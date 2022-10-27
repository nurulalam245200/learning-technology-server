const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Learning App Rurring");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(courses);
  } else {
    const c_category = courses.filter((e) => e.category_Id === id);
    res.send(c_category);
  }
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selected_course = courses.find((course) => course.id === id);

  res.send(selected_course);
});

app.get("/course", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("Server running on", port);
});
