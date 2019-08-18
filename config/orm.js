const connection = require("../config/connection");

let orm = {
  selectAll: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb (res);
    });
  },

  create: function (table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table
    queryString = "(" + cols.toString() + ")" + "VALUES (" + printQuestionMarks(vals.length) + ")";

    console.log(queryString);

    connection.query(queryString, vals, function (err, res) {

      if (err) {
        throw err;
      }
      cb(res)
    });
  },
  update: function (table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;
    queryString = " SET " + objToSql(objColVals) + " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};
printQuestionMarks = function (num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push("?")
  }
  return array.toString()
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}
module.exports = orm;