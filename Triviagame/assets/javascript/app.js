// This app is not fully functional. Pseudo-code is going to describe
            // what is left to do for the app to work.

$(document).ready(function(){
            // From line 6-41, the aim was to start timer as soon as the player
            //  loaded the page.The other aim was to design the done button to stop the time and the game and display the 
            // correct, incorrect and unanswered questions.
    var intervalId;
    var clockRun = false;

    function stop() {
        console.log("stopping");
          clearInterval(intervalId);
          $("#done").on("click", countdownTimer.stop);
}
        

// this is the count down timer.
    var seconds = 60;
      function secondsPassed() {
            var minutes = Math.round((seconds - 30) / 60);
            var secsRemain = seconds % 60;
    
            if(secsRemain < 10) {
                secsRemain = "0" + secsRemain;
    
            }
    
            document.getElementById("countdown").innerHTML = minutes + " : " + secsRemain;
    
            if(seconds == 0) {
                clearInterval(countdownTimer);
                document.getElementById("countdown").innerHTML = "Time's Up!";
            } 
                else{
                    seconds --;
                }
        
            }
            var countdownTimer = setInterval(secondsPassed, 1000);
    
         
    // Lines 45-70, the aim was to display the the correct, incorrect
    // and unanswered questions when the player clicked the radio buttons.
    var correctAns = "";
    var incorrectAns = "";
    var unAns = "";
    
    // the aim of this function was to make and if else statement about the
    // radio buttons clicked, which coordinated with the correct answer (the id names), which would add 1 to correct answers
    // otherwise if player clicked the radio buttons characterized by the class name
    // they would get incorrect answers added 1. If player left the radio buttons unclicked
    // the unanswered questions variable would be added 1.
    // 
            function is_checked() {
                var Keanu_checked = document.getElementById("#optradio1_Keanu").checked;
                var Neo_checked = document.getElementById("#optradio2_Neo").checked;
                var Sydney_checked = document.getElementById("#optradio3_Sydney").checked;
                var sushi_checked = document.getElementById("#optradio4_Sushi").checked;
                var Hugo_checked = document.getElementById("#optradio5_Hugo").checked;
                var bullet_checked = document.getElementById("#optradio6_Bullet").checked;
                var Morpheus_checked = document.getElementById("#optradio7_Morpheus").checked;
                var dreams_checked = document.getElementById("#optradio8_Dreams").checked;
                var radio_checked = document.getElementsByClassName(".radio-inline").checked;
    
                if(Keanu_checked == true && Neo_checked == true && Sydney_checked == true &&
                    sushi_checked == true && Hugo_checked == true && bullet_checked == true && Morpheus_checked == true
                && dreams_checked == true ){
                   correctAns ++;
                    return true;
                   
                }
                else if (radio_checked == true) {
                    incorrectAns ++;
                    return true;
                }
                else {
                    unAns ++;
                }
    
    
    
    
    
            }
    
    
    })