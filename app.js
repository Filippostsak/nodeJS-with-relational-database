const express = require("express");
const app = express();
const port = 3000;

const dataSource = require("./connect").dataSource;

app.use(express.json());

app.listen(port, () => {
  console.log(`The server is up on port ${port}`);
});
