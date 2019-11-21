const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;
const routes = require("./routes/routes.js");

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(["/teams", "/home", "/login"], routes);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/dist/index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, () => {
  console.log(`App now listening on port ${port}!`);
});
