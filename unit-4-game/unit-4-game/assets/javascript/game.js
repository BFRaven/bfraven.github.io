$(document).ready(function() {

var yourScore;
var compScore;


function Four (value) {
    this.value = value;
}

var eleWater = new Four();

var eleEarth = new Four();

var eleFire = new Four();

var eleAir = new Four();





var formedPlanets = 0;
var unformedPlanets = 0;
var gamePause = false;

    newUniverse();
$(".element").on("click", function() {

    addScore($(this).attr("id"));

    if (yourScore === compScore) {
        gamePause = true;
        $("#youWin").html("0");
        formedPlanets++;
        newUniverse();

    }

    else if (yourScore > compScore) {
        gamePause = true;
        unformedPlanets++;
        newUniverse();
    }


    });

});

function newUniverse() {
    gamePause = false;

    yourScore = 0;

    compScore = Math.floor(Math.random() * 101 + 19);

    // each element has a random value in points assigned to it
    // to solve this, make an array.
    // var elePoints = [];

    // water.points = eleRanNum (elePoints);
    // earth.points = eleRanNum (elePoints);
    // fire.points = eleRanNum (elePoints);
    // air.points = eleRanNum (elePoints);
    
    $("#compNumber").html(compScore);
    $("#compNumber").css('color', 'white');
    $("#compNumber").css({
        fontSize: 85
    });
    $("#youWin").html("Formed Planets:" + formedPlanets);
    $("#youLose").html("Unformed Planets:" + unformedPlanets);

}

// function eleRanNum (i) {
    // var points;

    // do {
        // points = Math.floor(Math.random() * 12)+1;
    // } while(i.includes(points));

    // i.push(points);
    // return points;
// }

// function newUniverse(Four) {

    // switch(Four) {
        // case "eleWater":
            // yourScore += water.points;
            // break;
        // case "eleEarth":
            // yourScore += earth.points;
            // break;
        // case "eleFire":
            // yourScore += fire.points;
            // break;
        // case "eleAir":
            // yourScore += air.points;
            // break;
    // }
