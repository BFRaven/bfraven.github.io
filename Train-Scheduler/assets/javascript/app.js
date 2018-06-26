// function to load the page properly
$(document).ready(function () {

    //Creating global variables
    var trainName;
    var destination;
    var trainTime;
    var frequency;
    var nextTrain;
    var minsAway;
    var timeConverted;
    var timeDiff;
    var timeRemain;
    var newTrain;


    // end global variables



    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDBO3Pjf6rX9ZPrsdfesKpcLACvx-L-UaE",
        authDomain: "train-scheduler-hw-1.firebaseapp.com",
        databaseURL: "https://train-scheduler-hw-1.firebaseio.com",
        projectId: "train-scheduler-hw-1",
        storageBucket: "train-scheduler-hw-1.appspot.com",
        messagingSenderId: "874875343939"
    };
    firebase.initializeApp(config);

    // saving unique firebase database to a variable called database.
    var database = firebase.database();


    $(document).on("click", "#user-input", function (event) {
        event.preventDefault();

        // setting variables to save the user's html field input.
        trainName = $("#trainName-input").val().trim();
        // console.log(trainName); making sure that the info is saved to firebase.
        destination = $("#destination-input").val().trim();
        // console.log(destination); making sure that the info is saved to firebase.
        trainTime = $("#trainTime-input").val().trim();
        // console.log(trainTime); making sure that the info is saved to firebase.
        frequency = $("#freq-input").val().trim();
        // console.log(frequency); making sure that the info is saved to firebase.
        
        //Calculations for the 'next arrival' and 'minutes away'

        timeConverted = moment(trainTime, "hh:mm").subtract(1, "years");
        currentTime = moment();
        timeDiff = moment().diff(moment(timeConverted), "minutes");
        timeRemain = timeDiff % frequency;
        minsAway = frequency - timeRemain;
        nextTrain = moment().add(minsAway, "minutes");
        newTrain = moment(nextTrain).format("hh:mm A");
        
    // need to make the mins away count-down be in real time.        
        

    // clear the field of the user input when add train button is clicked.
    // $('input:text, textarea').blur(function(){
    //     if (!this.value.length) {
    //         this.value = this.defaultValue;
    //     }
    // });
        
        
        // adding values to data-base.
        database.ref().push({

            trainName: trainName,
            destination: destination,
            trainTime: trainTime,
            frequency: frequency,
            newTrain : newTrain,
            minsAway : minsAway,
            dateAdded: firebase.database.ServerValue.TIMESTAMP // takes timesstamp of when the data goes in database.



        }); // end data-base push method 

        

    });// end on-click function

    // initiate child-added function, to append the user input that was saved to data-base on to the html web page.
    database.ref().on("child_added", function (snapshot) {

        //Dynamically creating the table rows and columns.
        var newval = snapshot.val();

        var newRow = $("<tr>");
        var trainNameTd = $("<td>");
        var destinationTd = $("<td>");
        var trainTimeTd = $("<td>");
        var frequencyTd = $("<td>");
        var nextArvlTd = $("<td>");
        var minsAwayTd = $("<td>");


        // appending captured user input from data-base unto html.
        trainNameTd.text(newval.trainName);
        destinationTd.text(newval.destination);
        trainTimeTd.text(newval.trainTimeTd);
        frequencyTd.text(newval.frequency);
        nextArvlTd.text(newval.newTrain);
        minsAwayTd.text(newval.minsAway);

        newRow.append(trainNameTd);
        newRow.append(destinationTd);
        newRow.append(frequencyTd);
        newRow.append(nextArvlTd);
        newRow.append(minsAwayTd);




        $("tBody").append(newRow);



    }); // end child-added function










































});