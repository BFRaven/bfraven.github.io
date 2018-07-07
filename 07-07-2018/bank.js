var fs = require("fs")

fs.readFile("bank.txt", 'utf8', (err, data) => {
    if (err) throw err;
    var data = data.split(",")
    console.log(data);
    // data = parseFloat(data);

    var operator = process.argv[2]
    switch (operator) {
        case "total":
            // var sum = 0;

            // //  data = [ '1', ' 2.33', ' 4.23', ' -2', ' -2', ' -.25', ' 5', ' 10', ' 5' ]

            // const sum = data.reduce((total, amount) => total + amount); 
            // for (var i = 0; i < data.length; i++) {
            //     // var trans = data[i]
            //     balance = balance+trans
            //     console.log(data[i])
            //     console.log(balance)  
            // }
            // break;


            var sum = 0;

            for (var i = 0; i < data.length; i++) {

                sum += parseFloat(data[i]);

            }
            console.log(sum);
            break;
        case "deposit":
            fs.appendFile("bank.txt", ", " + process.argv[3], (err) => {
                if (err) throw err;
                console.log('The "data to append" was appended to file!');
                });
                break;

        case "withdraw":
            fs.appendFile("bank.txt", ", -" + process.argv[3], (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
            });
            break;
    }

});