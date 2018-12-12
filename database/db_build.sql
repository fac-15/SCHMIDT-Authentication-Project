BEGIN;

-- *************** users table ***************

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (email, name, password) VALUES
('dummy email', 'dummy name', 'dummy password');

-- *************** resources table ***************

DROP TABLE IF EXISTS resources CASCADE;
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(10) NOT NULL,
  skill VARCHAR(12) NOT NULL,
  level VARCHAR(10) NOT NULL,
  source TEXT,
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO resources (name, type, skill, level, source) VALUES
('online html', 'online', 'html','easy', 'www.html.com'),
('online css', 'online', 'css','hard', 'www.css.com'),
('book html', 'book', 'html','medium', 'fac'),
('harry', 'human', 'html','easy', 'pub'),
('css', 'book', 'css','easy', 'fac'),
('NodeJs', 'book', 'css','easy', 'fac');


COMMIT;
