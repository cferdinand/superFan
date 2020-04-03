const models = require("../models/index.js");
const bcrypt = require("bcrypt");

module.exports = {
  addUser: (req, res) => {
    const saltRounds = 10;
    models.Users.getUser(req.body.username).then(user => {
      if (!user.rowCount) {
        bcrypt
          .hash(req.body.password, saltRounds)
          .then(hash => {
            let id = models.Users.addNewUser(
              req.body.username,
              hash,
              req.session.id
            ).then(newUser => {
              return newUser.rows[0].id;
            });
            return id;
          })
          .then(id => {
            return models.Sessions.updateSession(req.session.id, id).catch(
              err => {
                console.log(err);
              }
            );
          })
          .then(() => {
            res.sendStatus(200);
          });
      } else {
        res.status(500).send("User already exists");
      }
    });
  },
  getExistingUser: (req, res) => {
    models.Users.getUser(req.body.username)
      .then(user => {
        if (user.rowCount !== 0) {
          const valid = bcrypt.compare(
            req.body.password,
            user.rows[0].user_password
          );
          if (valid) {
            models.Sessions.updateSession(req.session.id, user.rows[0].id).then(
              () => {
                res.sendStatus(204);
              }
            );
          } else {
            throw new Error("Username or passowrd incorrect");
          }
        } else {
          throw new Error("User Not Found");
        }
      })
      .catch(err => {
        console.log(err.message);
        res.status(403).send(err.message);
      });
  },
  addFavorite: (req, res) => {
    let favoriteData = { team: req.body.team, userId: req.session.user_id };
    return models.Users.addFavoriteTeam(favoriteData)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getFavoriteTeam: (req, res) => {
    return models.Users.getFav(req.session.user_id)
      .then(fav => {
        res.status(201).send(fav);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  logout: (req, res, next) => {
    return models.Sessions.deleteSession(req.session.user_id)
      .then(() => {
        res.clearCookie("superFan");
        res.status(200).send(true);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(false);
      });
  }
};
