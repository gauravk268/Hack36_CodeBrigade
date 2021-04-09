const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running. On Port ${port}`);
});
