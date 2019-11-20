const {
  getFixtureList,
  getHighlights,
  getListOfTeams,
  getListOfStandings,
  addFavoriteTeam
} = require("../models/models.js");

module.exports = {
  getTeams: (req, res) => {
    getListOfTeams(req.params.leagueId)
      .then(({ data }) => {
        res.send(data.api).status(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getFixtures: (req, res) => {
    getFixtureList(req.params.teamId, req.params.leagueId)
      .then(data => {
        res.send(data.data).status(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getStandings: async (req, res) => {
    try {
      let standing = await getListOfStandings(req.params.leagueId);
      res.send(standing.data).status(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getHighlights: async (req, res) => {
    try {
      let highlights = await getHighlights(req.params.team);
      res.send(highlights.data).status(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  addFavorites: (req, res) => {
    addFavoriteTeam(req.body)
      .then(data => {
        res.send(data.data).status(201);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
