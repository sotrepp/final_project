// adjust the volume of the narrator and the background music.
document.getElementById("narrator").volume = 0.7;
document.getElementById("bg_music").volume = 0.1;

// Create variables for each of the flowers we want to alter.
var flower1 = document.getElementById('flower1');
var flower2 = document.getElementById('flower2');
var flower3 = document.getElementById('flower3');
var flower4 = document.getElementById('flower4');
var flower5 = document.getElementById('flower5');
var flower6 = document.getElementById('flower6');
var flower7 = document.getElementById('flower7');
var flower8 = document.getElementById('flower8');

// Give each flower a random number as their X position
flower1.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower2.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower3.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower4.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower5.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower6.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower7.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower8.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";

// add sound effects with JQuery
$(document).ready(function() {
  var chirp = $("#birdChirp")[0];
  chirp.volume = 0.09;

  $("#bird")
  .mouseenter(function() {
    chirp.play();
  });

  var evilLaugh = $("#evilLaugh")[0];
  evilLaugh.volume = 0.08;

  $("#left_arm")
  .mouseenter(function() {
    evilLaugh.play();
    console.log("HELLO")
  });

  $("#right_arm")
  .mouseenter(function() {
    evilLaugh.play();
  });

});
