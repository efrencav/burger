// Set up MySQL connection.
const mysql = require("mysql");
require("dotenv").config();

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'burgers_db'
  });
};

// const connection = mysql.createConnection(process.env.JAWSDB_URL);
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
