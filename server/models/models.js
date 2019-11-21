const { apiCall, youtube } = require("../../config.json");
const axios = require("axios");
const db = require("../../db/index.js");
const bcrypt = require("bcrypt");

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
  getFixtureList: (teamId, leagueId) => {
    return axios
      .get(
        `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${teamId}/${leagueId}`,
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
  getHighlights: match => {
    const headers = `part=snippet&q="${match}" highlights&channelId=UCqZQlzSHbVJrwrn5XvzrzcA&key=${youtube.APIKEY}&content-type=application/json&videoEmbeddable=true&type=video&maxResults=1`;
    return axios
      .get(`https://www.googleapis.com/youtube/v3/search?${headers}`)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getUser: username => {
    return db
      .query(`SELECT * FROM user_table WHERE username='${username}'`)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  addNewUser: (username, password, sessionId) => {
    return db
      .query(
        `INSERT INTO user_table (username, user_password, sessionId) VALUES ($1,$2,$3) RETURNING sessionid`,
        [username, password, sessionId]
      )
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  addFavoriteTeam: ({ team, username }) => {
    let favTeam = JSON.stringify(team);
    return db
      .query(
        `UPDATE user_table SET favorite_team='${favTeam}' WHERE id=(SELECT id from user_table where username='${username}')`
      )
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
