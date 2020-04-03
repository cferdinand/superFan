const db = require("../../db/index.js");

module.exports = {
  getUser: username => {
    console.log(username);
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
  addFavoriteTeam: ({ team, userId }) => {
    return db
      .query(
        `INSERT INTO favorite_teams(user_id,api_id,favorite_name,favorite_logo) VALUES(${userId},${team.team_id},'${team.name}','${team.logo}') RETURNING id`
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
  getFav: userId => {
    return db
      .query(`SELECT * from favorite_teams WHERE user_id='${userId}'`)
      .then(({ rows }) => {
        return rows[0];
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
