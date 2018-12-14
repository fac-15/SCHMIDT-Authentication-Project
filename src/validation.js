const dbConnection = require("../database/db_connection");
const dynamic = require("./handler");

const checkUser = (username, password, cb) => {
  // console.log(username, pass);
  console.log("CHECKUSER---", username, password);

  dbConnection.query(
    `SELECT * from users WHERE name = '${username}'`,
    (err, res) => {
      if (err) return cb(err);
      console.log("res: " + res.rows);
      cb(null, res.rows);
    }
  );
};

// document.getElementById("login_btn").addEventListener("click", checkuser());

module.exports = checkUser;
