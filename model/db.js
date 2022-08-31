var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "./db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            username text
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("Table already created.");
          console.log(err.message);
        } else {
          // Table just created, creating some rows
          var insert = "INSERT INTO user (name, username) VALUES (?,?)";
          db.run(insert, ["name1", "username1"]);
          db.run(insert, ["name2", "username2"]);
        }
      }
    );
  }
});

module.exports = db;
