SELECT 'CREATE DATABASE superfan'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'superfan')\gexec
\c superfan;

-- ---
-- Table 'Users'
-- 
-- ---
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(60) NULL,
  user_password VARCHAR(1000) NULL,
  sessionid INT NULL,
  favorite_team VARCHAR NULL
);

-- ---
-- Table 'Favorite Team'
-- 
-- ---

DROP TABLE IF EXISTS favorite_teams;
CREATE TABLE favorite_teams (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL,
  api_id INTEGER NOT NULL,
  favorite_name VARCHAR(60) NOT NULL,
  favorite_logo VARCHAR NULL
);

-- ---
-- Table 'Session'
-- 
-- ---

DROP TABLE IF EXISTS sessions_table CASCADE;
CREATE TABLE sessions_table (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NULL,
  session_value VARCHAR(250) NULL
);

ALTER TABLE IF EXISTS users ADD CONSTRAINT sessfk FOREIGN KEY (sessionid) REFERENCES sessions_table (id);
ALTER TABLE IF EXISTS favorite_teams ADD CONSTRAINT fursfk FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE IF EXISTS sessions_table ADD CONSTRAINT sursfk FOREIGN KEY (user_id) REFERENCES users (id);

CREATE INDEX user_id_index ON users (id);
CREATE INDEX username_index ON users (username);
CREATE INDEX favorite_id_index ON favorite_teams (id);
CREATE INDEX session_id_index ON sessions_table (id);
CREATE INDEX session_value_index ON sessions_table (session_value);
