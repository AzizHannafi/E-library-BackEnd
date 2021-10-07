'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'e_library'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("e_library Database Connected successfully!");
});
module.exports = dbConn;