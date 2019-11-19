const { apiCall } = require("../../config.json");
const axios = require("axios");
module.exports = {
  getListOfStandings: leagueId => {
    console.log(leagueId);
    // const headers = {
    //   "content-type": "application/octet-stream",
    //   "x-rapidapi-host": apiCall["x-rapidapi-host"],
    //   "x-rapidapi-key": apiCall.APIKEY
    // };
    // return axios
    //   .get(
    //     `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`,
    //     headers
    //   )
    //   .then(data => {
    //     return data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     throw err;
    //   });
  },
  getListOfTeams: leagueId => {},
  getFixtureList: teamId => {},
  getHighlights: () => {},
  addFavoriteTeam: team => {}
};
