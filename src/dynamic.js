// const dbConnection = require("../database/db_connection");
// const dynamic = require("./handler");

// const getData = (type, skill, level, cb) => {
//   dbConnection.query(`SELECT * FROM resources`, (err, res) => {
//     if (err) return cb(err);
//     // console.log("res.rows: " + res.rows);
//     cb(null, res.rows);
//   });
// };

// module.exports = getData;

const dbConnection = require("../database/db_connection");
const dynamic = require("./handler");

const checkUser = cb => {
  let username = document.getElementById("login_username").value;
  let password = document.getElementById("login_password").value;

  // console.log(username, pass);

  dbConnection.query(
    `SELECT * from users WHERE name = '${username}' and password = '${password}`,
    (err, res) => {
      if (err) return cb(err);
      console.log("res: " + res.rows);
      cb(null, res.rows);
    }
  );
  document.getElementById("login_btn").addEventListener("click", checkuser());
};

module.exports = checkUser;
