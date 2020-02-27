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
          let newUser = await addNewUser(
            req.body.username,
            hash,
            req.session.id
          );
          return newUser.rows[0].sessionid;
        })
        .then(() => {
          res.sendStatus(200);
        });
    } else {
      res.status(500).send("User already exists");
    }
  },
  getExistingUser: async (req, res) => {
    try {
      let user = await getUser(req.body.username);
      if (user.rowCount !== 0) {
        const valid = await bcrypt.compare(
          req.body.password,
          user.rows[0].user_password
        );
        valid
          ? res.status(200).redirect(301, "/home")
          : res
              .status(403)
              .send({ response: "Username or passowrd incorrect" });
      } else {
        res.status(403).send({ response: "User Not Found" });
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
  },
  getFavoriteTeam: async (req, res) => {
    try {
      let fav = await getFav(req);
      res.status(201).send(fav);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
};
