
// Adjust the volume of the narrator and music
document.getElementById("narrator").volume = 0.4;
document.getElementById("bg_music").volume = 0.1;

// Set up global variables to make the clouds move
var cloud1 = document.querySelector('#cloud1');
var cloud2 = document.querySelector('#cloud2');
var cloud3 = document.querySelector('#cloud3');

var animation = requestAnimationFrame(animateClouds);
var cloud1Const = 0;
var cloud2Const = 0;
var cloud3Const = 0;

// function which will animate the clouds.
function animateClouds (){
  // If the clouds have reached beyond the end of the screen, make them appear at the other side of the screen.
  if (cloud1Const >= 1440){
    cloud1.style.transform = "translate(" + (cloud1Const - cloud1Const - 600) + "px)";
    animation = requestAnimationFrame(animateClouds);
    cloud1Const = -300;
  }
  // Otherwise, move the cloud forwards.
  else if (cloud1Const <= 1440){
    animation = requestAnimationFrame(animateClouds);
    cloud1.style.transform = "translate(" + cloud1Const + "px)";
    cloud1Const += 0.09;
  }
  // Do the same for cloud 2
  if (cloud2Const <= -900){
    cloud2.style.transform = "translate(1600px)";
    cloud2Const = 900;
  }
  else if (cloud2Const > -900){
    cloud2.style.transform = "translate(" + cloud2Const + "px)";
    cloud2Const -= 0.09;
  }

  // and the same for cloud 3.
  if (cloud3Const >= 400){
    cloud3.style.transform = "translate(" + (cloud3Const - cloud3Const - 1600) + "px)";
    cloud3Const = -1500;
  }
  else if (cloud3Const <= 400){
    cloud3.style.transform = "translate(" + cloud3Const + "px)";
    cloud3Const += 0.09;
  }
}

// Play the sound effect when the correct element is hovered.
$(document).ready(function() {
  var chirp = $("#birdChirp")[0];
  chirp.volume = 0.06;

  // When you hover over the performance banner, make the bird chirp.
  $("#performanceBanner")
  .mouseenter(function() {
    chirp.play();
  });

  var wind = $("#windEffect")[0];
  wind.volume = 0.2;

  // when you hover over the forest banner, make a wind sound effect play
  $("#forestBanner")
  .mouseenter(function() {
    wind.play();
  });

  var flute = $("#flute")[0];
  flute.volume = 0.4;

  // When you hover over the palace banner, make a flute play.
  $("#palaceBanner")
  .mouseenter(function() {
    flute.play();
  });

  // fade out the video with a long enough delay that the animaton finishes + the viewer have had time to read it. 
  $("video").delay(7000).fadeOut(2000);

});
