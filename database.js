const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'koulu',
  database: 'netdb'
});
module.exports = connection;