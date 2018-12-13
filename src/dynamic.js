const dbConnection = require("../database/db_connection");
const dynamic = require("./handler");

const addUserToDatabase = (email, name, password, cb) => {
  const database = db.get("data") || [];
  const newItem = { email, name, password };
  const updateDatabase = database.concat(newItem);
  db.set({ data: updateDatabase });
  cb(null, true);
};

const getData = (type, skill, level, cb) => {
  console.log(type);
  console.log(skill);
  console.log(level);

  dbConnection.query(`SELECT * FROM resources`, (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

module.exports = getData;
