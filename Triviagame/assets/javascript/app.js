$(document).ready(function(){

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


var correctAns = 0;
var incorrectAns = 0;
var unAns = 0;

        function is_checked() {
            var Keanu_checked = document.getElementById("optradio1_Keanu").checked;
            var Neo_checked = document.getElementById("optradio2_Neo").checked;
            var Sydney_checked = document.getElementById("#optradio3_Sydney").checked;
            var sushi_checked = document.getElementById("#optradio4_Sushi").checked;
            var Hugo_checked = document.getElementById("#optradio5_Hugo").checked;
            var bullet_checked = document.getElementById("#optradio6_Bullet").checked;
            var Morpheus_checked = document.getElementById("#optradio7_Morpheus").checked;
            var dreams_checked = document.getElementById("#optradio8_Dreams").checked;
            var radio_checked = document.getElementsByClassName("radio-inline").checked;

            if(Keanu_checked == true && Neo_checked == true){
                alert("You have selected answers");
                return true;

            }





        }


})