
// Adjust the volume of the narrator and the background music
document.getElementById("bg_music").volume = 0.1;
document.getElementById("narrator").volume = 0.75;

// Play sound effects with JQuery
$(document).ready(function() {

  var chirp = $("#chirp")[0];
  chirp.volume = 0.06;

  $("#bird")
  .mouseenter(function() {
    chirp.play();
  });

  var crowd = $("#crowd")[0];
  crowd.volume = 0.085;

  $("#crowdSoundTrigger")
  .mouseenter(function() {
    crowd.play();
  });

});
