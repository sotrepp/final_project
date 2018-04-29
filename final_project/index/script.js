/*$(document).ready(function() {
  // fade in the video of the woman
  $('#container').hide().delay(500).fadeIn(1500);
});*/

document.getElementById("narrator").volume = 0.4;
document.getElementById("bg_music").volume = 0.1;


var cloud1 = document.querySelector('#cloud1');
var cloud2 = document.querySelector('#cloud2');
var cloud3 = document.querySelector('#cloud3');

var animation = requestAnimationFrame(animateClouds);
var cloud1Const = 0;
var cloud2Const = 0;
var cloud3Const = 0;
// function which will animate the circöe.
function animateClouds (){
  if (cloud1Const >= 1440){
    cloud1.style.transform = "translate(" + (cloud1Const - cloud1Const - 600) + "px)";
    animation = requestAnimationFrame(animateClouds);
    cloud1Const = -300;
  }
  else if (cloud1Const <= 1440){
    animation = requestAnimationFrame(animateClouds);
    cloud1.style.transform = "translate(" + cloud1Const + "px)";
    cloud1Const += 0.09;
  }
  if (cloud2Const <= -900){
    cloud2.style.transform = "translate(1600px)";
    cloud2Const = 900;
    //console.log("hello")
  }
  else if (cloud2Const > -900){
    cloud2.style.transform = "translate(" + cloud2Const + "px)";
    cloud2Const -= 0.09;
    //console.log(cloud2Const)
  }

  if (cloud3Const >= 400){
    cloud3.style.transform = "translate(" + (cloud3Const - cloud3Const - 1600) + "px)";
    cloud3Const = -1500;
  }
  else if (cloud3Const <= 400){
    cloud3.style.transform = "translate(" + cloud3Const + "px)";
    cloud3Const += 0.09;
  }
}

$(document).ready(function() {
  var chirp = $("#birdChirp")[0];
  chirp.volume = 0.06;

  $("#performanceBanner")
  .mouseenter(function() {
    chirp.play();
  });

  /*$("#birdOnPedestal")
  .mouseenter(function() {
    chirp.play();
  });*/

  var wind = $("#windEffect")[0];
  wind.volume = 0.2;

  /*$("#forest")
  .mouseenter(function() {
    wind.play();
  });*/

  $("#forestBanner")
  .mouseenter(function() {
    wind.play();
  });

  var flute = $("#flute")[0];
  flute.volume = 0.4;

  $("#palaceBanner")
  .mouseenter(function() {
    flute.play();
  });

  /*$("#palace")
  .mouseenter(function() {
    flute.play();
  });*/

});
