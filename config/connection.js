var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection ({
        port: 8080,
        host:"localhost",
        user: "root",
        password: " ********** ",
        database: "icecreamshop_db"
    });
};

//make the connection here so i can export it out useing module.
connection.connect();

module.exports = connection;