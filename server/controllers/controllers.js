const {
  getFixtureList,
  getHighlights,
  getListOfTeams,
  getListOfStandings,
  addFavoriteTeam,
  addNewUser,
  getUser
} = require("../models/models.js");
const bcrypt = require("bcrypt");

module.exports = {
  getTeams: async (req, res) => {
    try {
      let teams = await getListOfTeams(req.params.leagueId);
      res.send(teams.data.api).status(200);
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
      res.send(fixtures.data).status(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getStandings: async (req, res) => {
    try {
      let standings = await getListOfStandings(req.params.leagueId);
      res.send(standings.data.api.standings[0]).status(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getHighlights: async (req, res) => {
    try {
      let highlights = await getHighlights(req.query.match);
      res.send(highlights.data.items[0]).status(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  addUser: async (req, res) => {
    const saltRounds = 10;
    let user = await getUser(req.body.username);
    if (user.rowCount === 0) {
      bcrypt
        .hash(req.body.password, saltRounds)
        .then(async hash => {
          let sessionId = await addNewUser(req.body.username, hash, hash);
          return sessionId.rows[0].sessionid;
        })
        .then(sessionId => {
          res.send(sessionId).status(200);
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
            valid ? res.sendStatus(200) : res.sendStatus(404);
          });
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  addFavorites: async (req, res) => {
    try {
      await addFavoriteTeam(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
};
