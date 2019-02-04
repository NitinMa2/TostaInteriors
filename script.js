// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the body
var body = document.getElementById("body");
// Get the nav
var nav = document.getElementById("nav");
// Get the video div
var video = document.getElementById('video');
// Get the play button
var playButton = document.getElementById("playButton");
// Get the close button
var close = document.getElementById("close");
// Get the down buttom
var content = document.getElementById("header-content");
// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Video play button
playButton.onclick = function() {playVideo()};
close.onclick = function() {closeVideo()};

// Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

function playVideo() {
	video.style.display = "block";
	content.style.display = "none";
	window.scrollTo( 0, 0 );
	body.classList.add("stop-scrolling");
}

function closeVideo() {
	video.style.display = "none";
	content.style.display = "block";
	body.classList.remove("stop-scrolling");
}