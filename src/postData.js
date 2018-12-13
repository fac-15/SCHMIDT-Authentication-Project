const dbConnection = require("../database/db_connection");
const dynamic = require("./handler");

const addUserToDatabase = (email, name, password, cb) => {
  dbConnection.query(
    "INSERT INTO users (email, name, password) VALUES ($1, $2, $3)",
    [email, name, password],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        console.log(addUserToDatabase);
        cb(null, res);
      }
    }
  );
};

module.exports = addUserToDatabase;
