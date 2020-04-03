const Pool = require("pg").Pool;

const config = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
};

// if (process.env.NODE_ENV === "production") {
//   config.ssl = JSON.parse(process.env.SSL);
// }

const pool = new Pool(config);

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
