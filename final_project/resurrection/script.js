document.getElementById("narrator").volume = 0.7;
document.getElementById("bg_music").volume = 0.1;


var flower1 = document.getElementById('flower1');
var flower2 = document.getElementById('flower2');
var flower3 = document.getElementById('flower3');
var flower4 = document.getElementById('flower4');
var flower5 = document.getElementById('flower5');
var flower6 = document.getElementById('flower6');

flower1.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower2.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower3.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower4.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower5.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
flower6.style.transform = "translateX(" + (Math.floor(Math.random() * 1300) + 1) + "px)";
/*
var speed1 = Math.floor(Math.random() * 6) + 1;
var speed2 = Math.floor(Math.random() * 6) + 1;
var speed3 = Math.floor(Math.random() * 6) + 1;
var speed4 = Math.floor(Math.random() * 6) + 1;
var speed5 = Math.floor(Math.random() * 6) + 1;
var speed6 = Math.floor(Math.random() * 6) + 1;


var animation = requestAnimationFrame(animateFlowers);

function animateFlowers () {
  flower1.style.transform = "translate3d(0px," + speed1 + "px, 0px)";
  flower2.style.transform = "translate3d(" + speed2 + "px, 0px)";
  flower3.style.transform = "translate3d(" + speed3 + "px, 0px)";
  flower4.style.transform = "translate3d(" + speed4 + "px, 0px)";
  flower5.style.transform = "translate3d(" + speed5 + "px, 0px)";
  flower6.style.transform = "translate3d(" + speed6 + "px, 0px)";
  animation = requestAnimationFrame(animateFlowers);
}
*/
