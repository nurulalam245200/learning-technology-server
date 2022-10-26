const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Learning App Rurring");
});

app.get("/category/:id", (req, res) => {
  res.send(categories);
  const id = req.params.id;
  if (id == "8") {
    res.send(categories);
  } else {
    const courses_category = categories.filter(
      (category) => category.category_Id === id
    );
    res.send(courses_category);
  }
});
app.listen(port, () => {
  console.log("Server running on", port);
});
