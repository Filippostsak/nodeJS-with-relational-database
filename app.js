// require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

const dataSource = require("./connect").dataSource;
const categoryRoute = require("./routes/category.route");
const postRoute = require("./routes/post.routes");

app.use(express.json());
app.use("/api/categories", categoryRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`The server is up on port ${port}`);
});
