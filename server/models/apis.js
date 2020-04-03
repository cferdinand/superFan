const axios = require("axios");

const headers = {
  "content-type": "application/octet-stream",
  "x-rapidapi-host": process.env.rapid_api_host,
  "x-rapidapi-key": process.env.football_APIKEY
};

module.exports = {
  getListOfStandings: leagueId => {
    return axios
      .get(`${process.env.API_URL}/leagueTable/${leagueId}`, {
        headers: headers
      })
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
      .get(`${process.env.API_URL}/teams/league/${leagueId}`, {
        headers: headers
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getFixtureList: (teamId, leagueId) => {
    return axios
      .get(`${process.env.API_URL}/fixtures/team/${teamId}/${leagueId}`, {
        headers: headers
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getHighlights: match => {
    let apiKey = process.env.youtube_APIKEY || youtube.youtube_APIKEY;
    const headers = `part=snippet&q=${match} highlights&channelId=UCqZQlzSHbVJrwrn5XvzrzcA&key=${apiKey}&content-type=application/json&videoEmbeddable=true&type=video&maxResults=1`;
    return axios
      .get(`${process.env.BASEURL}/search?${headers}`)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
