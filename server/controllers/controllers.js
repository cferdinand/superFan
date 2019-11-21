const {
  getFixtureList,
  getHighlights,
  getListOfTeams,
  getListOfStandings,
  addFavoriteTeam
} = require("../models/models.js");

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
  addFavorites: (req, res) => {
    addFavoriteTeam(req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
