var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
 host: "localhost",

 // Your port; if not 3306
 port: 3306,

 // Your username
 user: "root",

 // Your password
 password: "root",
 database: "new_greatbay"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});


function start() {
    inquirer.prompt([
        {
            name: "command",
            type: "list",
            message: "Do you want to post or bid?",
            choices: ["POST AN ITEM", "BID ON AN ITEM"]
        }
    ]).then(function (answers) {
        // console.log(answers)
        var command = answers.command;
        console.log(command);
        // console.log("'POST AN ITEM' or 'BID ON AN ITEM'")
        switch (command) {
            case "POST AN ITEM":
                // postitem()
                console.log("I WANT TO POST AN ITEM")
                inquirer.prompt([
                    {
                        name: "user",
                        message: "What is your name? "
                    },
                    {
                        name: "item",
                        message: "What item would you like to post?"
                    },
                    {
                        name: "starting_bid",
                        message: "What is the starting bid for your item?"
                    }
                ]).then(function (answers) {
                    var item = answers.item;
                    var bidder = answers.user;
                    var starting_bid = parseFloat(answers.starting_bid);
                    console.log(bidder + "'s " + item + " will start at $" + starting_bid);
                    
                    createItem(item, starting_bid, bidder);
                    // connection.end();
                });
                break;
            case "BID ON AN ITEM":
                // biditem()
                console.log("I WANT TO BID ON AN ITEM");
                // Code to display the items
                readProducts();
                console.log("HERE IS A LIST OF ELIGIBLE ITEMS TO BID ON!");

                function bidItem() { 
                inquirer.prompt([
                    {
                        name: "user",
                        message: "Which item do you want to bid on?"
                    }
                ])
            }
                

                // Code here to prompt user to bid on item via item id

                break;
        }
        // connection.end();
    });
};

function createItem(item, starting_bid, bidder) {
    console.log("ADDING YOUR ITEM TO THE LIST OF BIDDABLE ITEMS!....\n");
    connection.query(
        "INSERT INTO for_auction SET ?",
        {
            item: item,
            starting_bid: starting_bid,
            bidder: bidder
        },
        function (err, res) {
            if (err) throw err;
            // console.log(res);
            readProducts();
        }
    );
    // console.log(query.sql);
};

function readProducts() {
    // console.log("Selecting all items...\n");
     connection.query(
        "SELECT * FROM for_auction",
        function (err, res) {
            for (var i =0; i < res.length; i++) {
                console.log( "\n" + res[i].id + " | " + "Item: " + res[i].item + " | " + "$" + res[i].starting_bid + " | " + "Posted by: " + res[i].bidder);
            }
            if (err) throw err;

            connection.end();
        });
};


