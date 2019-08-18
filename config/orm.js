const connection = require("../config/connection");

let orm = {
  selectWhere: function (tableInput, colToSearch, valOfCol) {
    const queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) throw err;
      return result;
    });
  },

  create: function (table, cols, vals, cb) {
    queryString = "INSERT INTO " + table + "(" + cols + ")" + "VALUES (" + printQuestionMarks(vals.length) + ")"
    console.log('queryString');
    connection.query(queryString, vals, function (err, res) {
      if (err) throw err;
      else cb(res) 
    }
    )
  }
};

printQuestionMarks = function (num) {
  let array = []

  for (let i = 0; i < num; i++) {
    array.push("?")
  }
  return array.toString()
}

module.exports = orm;