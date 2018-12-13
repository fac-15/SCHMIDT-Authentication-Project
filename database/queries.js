const Store = require("data-store");
const db = new Store("db", { cwd: "./" });

const addUserToDatabase = (email, name, password, cb) => {
  const database = db.get("data") || [];
  const newItem = { email, name, password };
  const updateDatabase = database.concat(newItem);
  db.set({ data: updateDatabase });
  cb(null, true);
};
