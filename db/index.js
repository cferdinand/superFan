const Pool = require("pg").Pool;
const config = require("../config.json");

if (process.env.NODE_ENV === "dev") {
  config.env = config.development;
} else if (process.env.NODE_ENV === "prod") {
  config.env = config.production;
}

const pool = new Pool({
  user: config.env.PGUSER,
  host: config.env.PGHOST,
  database: config.env.PGDATABASE,
  port: config.env.PGPORT
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
