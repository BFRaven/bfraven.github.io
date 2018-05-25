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

    document.onkeyup = function(event) {
        
        var player = event.key;

        var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    
        if ((player === compChoices.length)) {

           
        }
    
    
    
    
    }