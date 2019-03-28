const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

function readProducts() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);

        var table = res;



        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Input product ID",
                    name: "selection",

                },
                {
                    type: "input",
                    name: "numberofunits",
                    message: "Select number of units"


                }

            ])

            .then(function (inquirerResponse) {
                console.log(inquirerResponse)
                console.log(inquirerResponse.selection);

                // based on the numberofunits the client wants 
                var productid = inquirerResponse.selection;
                var numofunits = inquirerResponse.numberofunits;
                var inStock = res[0];



                // find the object with an id of 4
                var id = productid;
                var targetItem;
                // get the res array
                // FOR each object in res
                // IF id of object == 4
                //   targetItem = object
                // END IF
                // END FOR

                for (var i = 0; i < res.length; i++) {
                    if (id === res[i].item_id.toString()) {
                        targetItem = res[i]
                    }
                }
                console.log(targetItem)
                if (numofunits > targetItem.stock_quantity) {
                    console.log("Insufficient Quantity")
                } else {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: targetItem.stock_quantity - numofunits,
                            },
                            {
                                item_id: targetItem.item_id,
                            }
                        ]
                    
                    )
                    console.log("Your total cost is $"+targetItem.price*numofunits)
                }

                // take the id of the item selected

                // and subtract the numberofunits by the current stock_quantity

                // then update the database with the new stock_quantity

            });
    });
}

readProducts();
