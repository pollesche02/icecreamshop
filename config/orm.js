var connection = require("../config/connection.js");

// here i want to write a function that pass 3 values (select,insert,update) each value needs a ? 

function questionMarks (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// now I need another function that will change the objects to value pairs to sql syntax ... 

function objToSql (ob) {

    var arr = [];  // loop through and push the string through
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob,key)) {
            // need to take care of spaces in the names
            if (typeof value === "string" && value.indexOf (" ") >=0 {
                value = " ' " + value + " ' ";
            }
            arr.push(key + " = " + value);
          }
        }
        return arr.toString();
    }
    // sql statement function....
    var orm = {
        all: function(tableInput, cd) {
            var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function(err, result) {
                if (err) throw err; cb(result);
            });
        },
        create function(table, cols, vals, cb) {
            var queryString = "INSERT INTO" + table;
        }
    }
}