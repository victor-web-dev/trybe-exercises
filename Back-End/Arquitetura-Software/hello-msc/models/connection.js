const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user:'root',
  password: 'RootDev-22',
  database: 'model_example',
  port: '3306'
});

module.exports = connection;