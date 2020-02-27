const {
  getFixtureList,
  getHighlights,
  getListOfTeams,
  getListOfStandings,
  addFavoriteTeam,
  addNewUser,
  getUser,
  getFav
} = require("../models/models.js");
const bcrypt = require("bcrypt");

module.exports = {
  getTeams: async (req, res) => {
    try {
      let teams = await getListOfTeams(req.params.leagueId);
      res.status(200).send(teams.data.api);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getFixtures: async (req, res) => {
    try {
      let fixtures = await getFixtureList(
        req.params.teamId,
        req.params.leagueId
      );
      res.status(200).send(fixtures.data);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getStandings: async (req, res) => {
    try {
      let standings = await getListOfStandings(req.params.leagueId);
      res.status(200).send(standings.data.api.standings[0]);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getHighlights: async (req, res) => {
    try {
      let highlights = await getHighlights(req.query.match);
      res.status(200).send(highlights.data.items[0]);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  addUser: async (req, res) => {
    const saltRounds = 10;
    let user = await getUser(req.body.username);
    if (!user.rowCount) {
      bcrypt
        .hash(req.body.password, saltRounds)
        .then(async hash => {
          let sessionId = await addNewUser(req.body.username, hash, req.session.session_value);
          return sessionId.rows[0].sessionid, id;
        })
        .then(sessionId => {
          res.status(200).send(sessionId);
        });
    } else {
      res.sendStatus(400);
    }
  },
  getExistingUser: async (req, res) => {
    try {
      let user = await getUser(req.query.username);
      if (user.rowCount !== 0) {
        bcrypt
          .compare(req.query.password, user.rows[0].user_password)
          .then(valid => {
            valid
              ? res.status(200).redirect(301, "/teams")
              : res.sendStatus(404);
          });
      } else {
        res.send({ response: "User Not Found" });
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  addFavorites: async (req, res) => {
    console.log(req.body);
    try {
      await addFavoriteTeam(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getFavoriteTeam: async (req, res) => {
    try {
      let fav = await getFav();
      res.status(201).send(fav);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
};
