const dbConnection = require("../database/db_connection");
const dynamic = require("./handler");

const getData = (type, skill, level, cb) => {
  dbConnection.query(`SELECT * FROM resources`, (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

// module.exports = { getData, addUserToDatabase };
module.exports = getData;
