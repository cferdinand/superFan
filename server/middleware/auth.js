const models = require("../models/index.js");

module.exports = {
  createSession: (req, res, next) => {
    Promise.resolve(req.cookies.superFan)
      .then(hash => {
        if (!hash) {
          throw hash;
        }
        return models.Sessions.getSession("session_value", hash);
      })
      .then(session => {
        if (!session) {
          throw session;
        }
        return session;
      })
      .catch(() => {
        return models.Sessions.createSession()
          .then(id => {
            return models.Sessions.getSession("id", id);
          })
          .then(session => {
            res.cookie("superFan", session.session_value);
            return session;
          });
      })
      .then(session => {
        req.session = session;
        next();
      });
  },
  verifySession: (req, res, next) => {
    return models.Sessions.getSession("id", req.session.id).then(session => {
      if (!session || !session.user_id) {
        res.redirect("/login");
      } else {
        next();
      }
    });
  },
  isLoggedIn: (req, res, next) => {
    return models.Sessions.getSession("id", req.session.id).then(session => {
      if (session && session.user_id) {
        res.redirect("/home");
      } else {
        next();
      }
    });
  }
};
