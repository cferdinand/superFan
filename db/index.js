const Pool = require("pg").Pool;
const config = require("../config.json");

if (process.env.NODE_ENV === "dev") {
  config.env = config.development;
}

const pool = new Pool({
  user: process.env.PGUSER || config.env.PGUSER,
  host: process.env.PGHOST || config.env.PGHOST,
  database: process.env.PGDATABASE || config.env.PGDATABASE,
  port: process.env.PGPORT || config.env.PGPORT
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
