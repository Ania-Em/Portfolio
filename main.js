
function playmenu() {
  var audio = new Audio("http://www.soundjay.com/switch/sounds/switch-13.mp3");
  audio.play();
}

const projectImage= document.querySelector(".project-image");
const arrowsNext= document.querySelector(".arrow-next");
const arrowsPrevious= document.querySelector(".arrow-previous");

let numberOfImage = 1;

arrowsNext.addEventListener("click", function(){projectImage.style.backgroundImage=`url('./assets/images/Dentico/${++numberOfImage}.png')`});

arrowsPrevious.addEventListener("click", function(){projectImage.style.backgroundImage=`url('./assets/images/Dentico/${--numberOfImage}.png')`});




