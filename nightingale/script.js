
// Adjust the volume for the narration and the music.
document.getElementById("bg_music").volume = 0.1;
document.getElementById("narrator").volume = 0.7;

// Use JQuery to play sound effects when the right element is hovered.
$(document).ready(function() {

  var chirp = $("#birdChirp")[0];
  chirp.volume = 0.06;

  $("#bird")
  .mouseenter(function() {
    chirp.play();
  });

  var man = $("#clearThroat")[0];
  man.volume = 0.09;

  $("#man")
  .mouseenter(function() {
    man.play();
  });

});

// Animate the div which the image of the man lives in to move forward (the man img element will be animated with CSS)
var man = document.getElementById("animationBox");
var animation = requestAnimationFrame(animateMan);
var xValue = 0;

function animateMan () {
  if (xValue >= 1600){
    man.style.transform = "translate(" + (xValue - xValue) + "px)";
    xValue = 0;
  }
  else if (xValue <= 1600){
    //animation = requestAnimationFrame(animateMan);
    man.style.transform = "translate(" + xValue + "px)";
    xValue += 0.25;

  }

  animation = requestAnimationFrame(animateMan);
}
