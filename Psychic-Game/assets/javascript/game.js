var compChoices = [
    "a",  "b",  "c", "d",
    "e", "f", "g", "h",
    "i", "j", "k", "l",
    "m", "n", "o", "p",
    "q", "r", "s", "t",
    "u", "v", "w", "x",
    "y", "z" ];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesFar = [];

    document.onkeyup = function(event) {
        
        var player = event.key;

        var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log("player= " + player + "compGuess= " + compGuess)
        if (player === compGuess) {
            wins++;
            disUpdate();
            }
            else {
                //console.log(guessesFar
                losses++;
                guessesLeft--;
                guessesFar.push(player);
                disUpdate();
            } 
    if (guessesLeft < 1) {
          //wins = 0;
          //losses= 0;
          guessesLeft = 9;
          guessesFar = [];
       }
          // I can keep if w/o else
     
      function disUpdate () {
          document.getElementById("wins").innerHTML = wins
          document.getElementById("losses").innerHTML = losses
          document.getElementById("yourGuesses").innerHTML = guessesFar
          document.getElementById("guessesLeft").innerHTML = guessesLeft
      }

    };