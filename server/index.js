const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const port = process.env.PORT || 3000;
const Auth = require("./middleware/auth.js");
const routes = require("./routes/routes.js");
//const create = require("./models/sessions.js");

app.use(cookieparser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(Auth.createSession);
app.use(
  express.static(path.join(__dirname, "/../client/dist"), {
    maxAge: 1,
    index: false
  })
);

app.get("/", Auth.verifySession, (req, res) => {
  res.redirect("/home");
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/dist/index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use(["/teams", "/home", "/signup"], routes);

// app.get("/validate", function(req, res) {
//   // res.redirect("/login");
//   res.sendFile(path.join(__dirname + "/../client/dist/index.html"), function(
//     err
//   ) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`App now listening on port ${port}!`);
});
