const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// const password = fs.readFileSync(path.join(__dirname, './db_pass.txt')).toString();
const password = '1817242';
const db_name = 'asl';
const user = 'root';
const sequelize = new Sequelize(db_name,user,password, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        encrypt: true
    }
});

// sequelize.authenticate().then(() => {
//     console.log("Connected succesfully");
// }).catch(err => {
//     console.log(err);
// });

module.exports = sequelize;

// var Connection = require('tedious').Connection;
// var Request = require('tedious').Request;
// var TYPES = require('tedious').TYPES;

// // Driver={ODBC Driver 13 for SQL Server};Server=tcp:1884377uanl.database.windows.net,1433;Database=alexadmin;Uid=alexadmin;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;

// // Create connection to database
// var config = {
//   server: '1884377uanl.database.windows.net',
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'alexadmin', // update me
//           password: 'Alvarez10' // update me
//       }
//   },
//   options: {
//       database: 'alexadmin'
//   }
// }
// var connection = new Connection(config);

// // Attempt to connect and execute queries if connection goes through
// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connected');
//   }
// });

// connection.connect();
