const axios = require("axios");
const db = require("../../db/index.js");
const bcrypt = require("bcrypt");

let config;
let apiCall;
let youtube;
if (process.env.NODE_ENV === "development") {
  config = require("../../config.json");
  apiCall = config.apiCall;
  youtube = config.youtube;
}

const headers = {
  "content-type": "application/octet-stream",
  "x-rapidapi-host": process.env.rapid_api_host || apiCall["x-rapidapi-host"],
  "x-rapidapi-key": process.env.football_APIKEY || apiCall.football_APIKEY
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
    let apiKey = process.env.youtube_APIKEY || youtube.youtube_APIKEY;
    const headers = `part=snippet&q=${match} highlights&channelId=UCqZQlzSHbVJrwrn5XvzrzcA&key=${apiKey}&content-type=application/json&videoEmbeddable=true&type=video&maxResults=1`;
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
      .query(`SELECT * FROM users WHERE username='${username}'`)
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
        `INSERT INTO users (username, user_password, sessionid) VALUES ($1,$2,$3) RETURNING sessionid, id`,
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
    let userId = `(SELECT id from users where username='${username}')`;
    return db
      .query(
        `INSERT INTO favorite_teams(user_id,favorite_name) VALUES(${userId},'${team}') RETURNING id`
      )
      .then(({ rows }) => {
        return db.query(
          `UPDATE users SET favorite_team='${rows[0].id}' WHERE id=${userId}`
        );
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getFav: req => {
    console.log(req.session);
    return db
      .query(
        `SELECT favorite_name from favorite_teams WHERE user_id='${req.session.user_id}'`
      )
      .then(({ rows }) => {
        return rows[0].favorite_name;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
