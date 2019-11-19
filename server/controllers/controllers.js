const {
  getFixtureList,
  getHighlights,
  getListOfTeams,
  getListOfStandings,
  addFavoriteTeam
} = require("../models/models.js");

module.exports = {
  getTeams: (req, res) => {
    getListOfTeams(req.params.teamId)
      .then(data => {
        res.send(data).status(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getFixtures: (req, res) => {
    getFixtureList(req.params.id)
      .then(data => {
        res.send(data).status(200);
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
  getHighlights: () => {},
  addFavorites: (req, res) => {
    addFavoriteTeam(req.body)
      .then(data => {
        res.send(data).status(201);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
