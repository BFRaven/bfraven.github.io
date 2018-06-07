$(document).ready(function() {

    resetUniverse();
$(".element").on("click",function() {

    addScore($(this).attr("id"));

    if (yourScore === compScore) {
        // gamePause = true;
        // $("#youWin").html("0");
        formedPlanets++;
        resetUniverse();

    }

    else if (yourScore > compScore) {
        // gamePause = true;
        unformedPlanets++;
        resetUniverse();
    }


    });

})

var yourScore;
var compScore;
var formedPlanets = 0;
var unformedPlanets = 0;

var waterEle = new Four();

var earthEle = new Four();

var fireEle = new Four();

var airEle = new Four();

// var gamePause = false;

// Functions.

function Four (value) {
    this.value = value;
}

function addScore(ele) {

    switch(ele) {
        case "water":
            yourScore += waterEle.value;
            break;
        case "earth":
            yourScore += earthEle.value;
            break;
        case "fire":
            yourScore += fireEle.value;
            break;
        case "air":
            yourScore += airEle.value;
            break;
    }

    $("#scoreBox").html(yourScore);
}



function resetUniverse() {
    // gamePause = false;

    var pointsArr = [];
    yourScore = 0;

    compScore = Math.floor(Math.random() * 102)+ 19;

    // each element has a random value in points assigned to it
    // to solve this, make an array.
    // var elePoints = [];

    waterEle.value = eleRanNum(pointsArr);
    earthEle.value = eleRanNum(pointsArr);
    fireEle.value = eleRanNum(pointsArr);
    airEle.value = eleRanNum(pointsArr);

    // console.log("Water :" + waterEle.value)
    // console.log("Earth :" + earthEle.value)
    // console.log("Fire :" + fireEle.value)
    // console.log("Air :" + airEle.value)


    $("#scoreBox").html(yourScore);
    $("#scoreBox").css('color', 'white');
    $("#scoreBox").css({
        fontSize: 85
    });
    $("#youWin").html("Formed Planets:" + formedPlanets);
    $("#youLose").html("Unformed Planets:" + unformedPlanets);

    $("#compNumber").html(compScore);
    $("#compNumber").css('color', 'white');
    $("#compNumber").css({
        fontSize: 85
    });
    

}

function eleRanNum (i) {
    var points;

    do {
        points = Math.floor(Math.random() * 12)+1;
    } while(i.includes(points));

    i.push(points);


    return points;
}

