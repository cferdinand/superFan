const models = require("../models/index.js");

module.exports = {
  getTeams: (req, res) => {
    return models.APIs.getListOfTeams(req.params.leagueId)
      .then(teams => {
        res.status(200).send(teams.data.api);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getFixtures: (req, res) => {
    const leagueId = 2;
    return models.Users.getFav(req.session.user_id)
      .then(({ api_id }) => {
        return models.APIs.getFixtureList(api_id, leagueId);
      })
      .then(fixtures => {
        res.status(200).send(fixtures.data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getStandings: (req, res) => {
    return models.APIs.getListOfStandings(req.params.leagueId)
      .then(standings => {
        res.status(200).send(standings.data.api.standings[0]);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getHighlights: (req, res) => {
    models.APIs.getHighlights(req.query.match)
      .then(highlights => {
        res.status(200).send(highlights.data.items[0]);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
