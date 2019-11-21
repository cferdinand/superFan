SELECT 'CREATE DATABASE superfan'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'superfan')\gexec
\c superfan;

-- ---
-- Table 'Users'
-- 
-- ---
DROP TABLE IF EXISTS user_table;
CREATE TABLE user_table (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(60) NULL,
  user_password VARCHAR(1000) NULL,
  sessionid VARCHAR NULL,
  favorite_team VARCHAR NULL
);

CREATE INDEX user_id_index ON user_table (id);
CREATE INDEX username_index ON user_table (username);
