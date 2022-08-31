const db = require("./db.js");
module.exports = {
  listAllUSer(cb) {
    var sql = "select * from user";
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        throw err;
      }
      cb(rows);
    });
  },
  getFirstUser(cb) {
    var sql = "select * from user where id = 1";
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        throw err;
      }
      cb(rows);
    });
  },
};
