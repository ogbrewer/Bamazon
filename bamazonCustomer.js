const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8000,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bambazon_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

function readProducts() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });


    inquirer
        .prompt([
            {
                type: "input",
                message: "Input product ID",
                name: "selection",

            }
                {
                type: "input",
                name: "numberofunits",
                message: 
                

            }

        ])

        .then(function (inquirerResponse) {
            console.log(inquirerResponse.selection);
            if (inquirerResponse.selection === "BID ON AN ITEM") {
                makeBid();
            } else if (inquirerResponse.selection === "POST AN ITEM") {
                makePost();
            }
        });
}

///////////////////////////////////////////////////////////////////////////
function makeBid() {
    var items = [];
    inquirer
        .prompt([
            {
                type: "list",
                message: "select bid item",
                choices: items,
                name: "makingbids"
            }
        ])
        .then()
}
function makePost() { }

