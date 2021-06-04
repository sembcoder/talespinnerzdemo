
/*
  Talespinnerz Countdown Demo JS
  June 1, 2021

*/

document.getElementById("storyReadyBtn").disabled = true;
var secsLeft = 10;
var clockID = setInterval (countdown, 1000);

function countdown() {
    var secsString = noAddLeadingZero (secsLeft);
    document.getElementById("seconds").textContent = secsString;
    document.getElementById("Waiting").textContent = "Ready to Go?";
    checkCountdown();
    secsLeft--;

}

function stopCountdown () {
    document.getElementById("Alert").textContent = "Adventure Awaits!";
    document.getElementById("storyReadyBtn").disabled = false; 
    clearInterval(clockID);
    readStory();
  }


function checkCountdown() {
   if (secsLeft === 0) stopCountdown();
}

function noAddLeadingZero(num) {
var numStr = (num < 10) ? (" " + num) : "" + num;
 return numStr;
}

function readStory () {
  document.getElementById("storyReadyBtn").onclick="talespinnerz_countdown_story.html"; 
}