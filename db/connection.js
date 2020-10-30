const util = require ("util")
const mysql = require ("mysql");
const { builtinModules } = require("module");

var connection = mysql.createConnection ({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "iempire2",
  database: "employee_db"
})

connection.connect(function (error) {
  if (error) throw error;

});

connection.query = util.promisify(connection.query)

module.exports = connection