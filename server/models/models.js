const { apiCall, youtube } = require("../../config.json");
const axios = require("axios");

const headers = {
  "content-type": "application/octet-stream",
  "x-rapidapi-host": apiCall["x-rapidapi-host"],
  "x-rapidapi-key": apiCall.APIKEY
};

module.exports = {
  getListOfStandings: leagueId => {
    return axios
      .get(
        `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`,
        { headers: headers }
      )
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getListOfTeams: leagueId => {
    return axios
      .get(
        `https://api-football-v1.p.rapidapi.com/v2/teams/league/${leagueId}`,
        { headers: headers }
      )
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getFixtureList: teamId => {
    return axios
      .get(
        `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${teamId}`,
        { headers: headers }
      )
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getHighlights: () => {
    return axios
      .get(`https://www.googleapis.com/youtube/v3/search`)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  addFavoriteTeam: team => {}
};
