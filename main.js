function playmenu() {
  var audio = new Audio("http://www.soundjay.com/switch/sounds/switch-13.mp3");
  audio.play();
}

// Dentico

let firstNumber2 = 1;
const projectImage2 = document.querySelector(".project2 .project-image");
const arrowsNext2 = document.querySelector(".project2 .arrow-next");
const arrowsPrevious2 = document.querySelector(".project2 .arrow-previous");
let sliderActive2 = document.querySelector(".project2 .dot1")
sliderActive2.classList.add("slide-active");

arrowsNext2.addEventListener("click", function () {
  if (firstNumber2 === 3){
    firstNumber2 = 1;
  } else {
    ++firstNumber2;
  } projectImage2.style.backgroundImage = `url('./assets/images/2/${firstNumber2}.png')`;
  
  let sliderActive2Previous = document.querySelector(".project2 .slide-active");
  sliderActive2Previous.classList.remove("slide-active");
  sliderActive2 = document.querySelector(`.project2 .dot${firstNumber2}`);
  sliderActive2.classList.add("slide-active");
});

arrowsPrevious2.addEventListener("click", function () {
  if (firstNumber2 === 1){
    firstNumber2 = 3;
  } else {
    --firstNumber2;
  }projectImage2.style.backgroundImage = `url('./assets/images/2/${firstNumber2}.png')`;

  let sliderActive2Previous = document.querySelector(".project2 .slide-active");
  sliderActive2Previous.classList.remove("slide-active");
  sliderActive2 = document.querySelector(`.project2 .dot${firstNumber2}`);
  sliderActive2.classList.add("slide-active");
});

