const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;
const routes = require("./routes/routes.js");

app.use(express.static(__dirname + "/../client/dist"));
app.use("/", routes);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.listen(port, () => {
  console.log(`App now listening on port ${port}!`);
});
