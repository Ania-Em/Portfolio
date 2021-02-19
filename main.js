
// Gallery

if (document.querySelector(`.project1 .dot1`)){
class ImagesSlides{
  constructor(numberOfSlides, numberOfProject){
  this.numberOfSlides = numberOfSlides;
  this.numberOfProject = numberOfProject;
  this.firstNumber = 1;
  this.projectImage = document.querySelector(`.project${this.numberOfProject}  .project-image`);
  this.arrowNext = document.querySelector(`.project${this.numberOfProject} .arrow-next`);
  this.arrowPrevious = document.querySelector(`.project${this.numberOfProject} .arrow-previous`);
  this.sliderActive = document.querySelector(`.project${this.numberOfProject} .dot1`);
  this.sliderActive.classList.add("slide-active");
  }
}

//Boho

const projectGallery1= new ImagesSlides(3,1);

projectGallery1.arrowNext.addEventListener("click", function () {
  if (projectGallery1.firstNumber === projectGallery1.numberOfSlides){
    projectGallery1.firstNumber = 1;
  } else {
    ++projectGallery1.firstNumber;
  } projectGallery1.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery1.numberOfProject}/${projectGallery1.firstNumber}.png')`;
  
  let sliderActive1Previous = document.querySelector(`.project${projectGallery1.numberOfProject} .slide-active`);
  sliderActive1Previous.classList.remove("slide-active");
  sliderActive1 = document.querySelector(`.project${projectGallery1.numberOfProject} .dot${projectGallery1.firstNumber}`);
  sliderActive1.classList.add("slide-active");
});

projectGallery1.arrowPrevious.addEventListener("click", function () {
  if (projectGallery1.firstNumber === 1){
    projectGallery1.firstNumber = projectGallery1.numberOfSlides;
  } else {
    --projectGallery1.firstNumber;
  } projectGallery1.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery1.numberOfProject}/${projectGallery1.firstNumber}.png')`;
  
  let sliderActive1Previous = document.querySelector(`.project${projectGallery1.numberOfProject} .slide-active`);
  sliderActive1Previous.classList.remove("slide-active");
  sliderActive1 = document.querySelector(`.project${projectGallery1.numberOfProject} .dot${projectGallery1.firstNumber}`);
  sliderActive1.classList.add("slide-active");
});

// Dentico

const projectGallery2= new ImagesSlides(3,2);

projectGallery2.arrowNext.addEventListener("click", function () {
  if (projectGallery2.firstNumber === projectGallery2.numberOfSlides){
    projectGallery2.firstNumber = 1;
  } else {
    ++projectGallery2.firstNumber;
  } projectGallery2.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery2.numberOfProject}/${projectGallery2.firstNumber}.png')`;
  
  let sliderActive2Previous = document.querySelector(`.project${projectGallery2.numberOfProject} .slide-active`);
  sliderActive2Previous.classList.remove("slide-active");
  sliderActive2 = document.querySelector(`.project${projectGallery2.numberOfProject} .dot${projectGallery2.firstNumber}`);
  sliderActive2.classList.add("slide-active");
});

projectGallery2.arrowPrevious.addEventListener("click", function () {
  if (projectGallery2.firstNumber === 1){
    projectGallery2.firstNumber = projectGallery2.numberOfSlides;
  } else {
    --projectGallery2.firstNumber;
  } projectGallery2.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery2.numberOfProject}/${projectGallery2.firstNumber}.png')`;
  
  let sliderActive2Previous = document.querySelector(`.project${projectGallery2.numberOfProject} .slide-active`);
  sliderActive2Previous.classList.remove("slide-active");
  sliderActive2 = document.querySelector(`.project${projectGallery2.numberOfProject} .dot${projectGallery2.firstNumber}`);
  sliderActive2.classList.add("slide-active");
});

//Cyber Chess 

const projectGallery3= new ImagesSlides(3,3);

projectGallery3.arrowNext.addEventListener("click", function () {
  if (projectGallery3.firstNumber === projectGallery3.numberOfSlides){
    projectGallery3.firstNumber = 1;
  } else {
    ++projectGallery3.firstNumber;
  } projectGallery3.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery3.numberOfProject}/${projectGallery3.firstNumber}.png')`;
  
  let sliderActive3Previous = document.querySelector(`.project${projectGallery3.numberOfProject} .slide-active`);
  sliderActive3Previous.classList.remove("slide-active");
  sliderActive3 = document.querySelector(`.project${projectGallery3.numberOfProject} .dot${projectGallery3.firstNumber}`);
  sliderActive3.classList.add("slide-active");
});

projectGallery3.arrowPrevious.addEventListener("click", function () {
  if (projectGallery3.firstNumber === 1){
    projectGallery3.firstNumber = projectGallery3.numberOfSlides;
  } else {
    --projectGallery3.firstNumber;
  } projectGallery3.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery3.numberOfProject}/${projectGallery3.firstNumber}.png')`;
  
  let sliderActive3Previous = document.querySelector(`.project${projectGallery3.numberOfProject} .slide-active`);
  sliderActive3Previous.classList.remove("slide-active");
  sliderActive3 = document.querySelector(`.project${projectGallery3.numberOfProject} .dot${projectGallery3.firstNumber}`);
  sliderActive3.classList.add("slide-active");
});

// Running

const projectGallery4= new ImagesSlides(3,4);

projectGallery4.arrowNext.addEventListener("click", function () {
  if (projectGallery4.firstNumber === projectGallery4.numberOfSlides){
    projectGallery4.firstNumber = 1;
  } else {
    ++projectGallery4.firstNumber;
  } projectGallery4.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery4.numberOfProject}/${projectGallery4.firstNumber}.png')`;
  
  let sliderActive4Previous = document.querySelector(`.project${projectGallery4.numberOfProject} .slide-active`);
  sliderActive4Previous.classList.remove("slide-active");
  sliderActive4 = document.querySelector(`.project${projectGallery4.numberOfProject} .dot${projectGallery4.firstNumber}`);
  sliderActive4.classList.add("slide-active");
});

projectGallery4.arrowPrevious.addEventListener("click", function () {
  if (projectGallery4.firstNumber === 1){
    projectGallery4.firstNumber = projectGallery4.numberOfSlides;
  } else {
    --projectGallery4.firstNumber;
  } projectGallery4.projectImage.style.backgroundImage = `url('./assets/images/${projectGallery4.numberOfProject}/${projectGallery4.firstNumber}.png')`;
  
  let sliderActive4Previous = document.querySelector(`.project${projectGallery4.numberOfProject} .slide-active`);
  sliderActive4Previous.classList.remove("slide-active");
  sliderActive4 = document.querySelector(`.project${projectGallery4.numberOfProject} .dot${projectGallery4.firstNumber}`);
  sliderActive4.classList.add("slide-active");


  
});
}

//Others


// if (document.querySelector(`.projectOthers1 .dot1`)){
// class ImagesSlidesOthers{
//   constructor(numberOfSlides, numberOfProject){
//   this.numberOfSlides = numberOfSlides;
//   this.numberOfProject = numberOfProject;
//   this.firstNumber = 1;
//   this.projectImage = document.querySelector(`.projectOthers${this.numberOfProject}  .project-image`);
//   this.arrowNext = document.querySelector(`.projectOthers${this.numberOfProject} .arrow-next`);
//   this.arrowPrevious = document.querySelector(`.projectOthers${this.numberOfProject} .arrow-previous`);
//   this.sliderActive = document.querySelector(`.projectOthers${this.numberOfProject} .dot1`);
//   this.sliderActive.classList.add("slide-active");
//   }
// }

// const projectGalleryOthers1= new ImagesSlidesOthers(13,1);

// projectGalleryOthers1.arrowNext.addEventListener("click", function () {
//   if (projectGalleryOthers1.firstNumber === projectGalleryOthers1.numberOfSlides){
//     projectGalleryOthers1.firstNumber = 1;
//   } else {
//     ++projectGalleryOthers1.firstNumber;
//   } projectGalleryOthers1.projectImage.style.backgroundImage = `url('./assets/images/Others${projectGalleryOthers1.numberOfProject}/${projectGalleryOthers1.firstNumber}.jpg')`;
  
//   let sliderActivePreviousOther1 = document.querySelector(`.projectOthers${projectGalleryOthers1.numberOfProject} .slide-active`);
//   sliderActivePreviousOther1.classList.remove("slide-active");
//   sliderActiveOther1 = document.querySelector(`.projectOthers${projectGalleryOthers1.numberOfProject} .dot${projectGalleryOthers1.firstNumber}`);
//   sliderActiveOther1.classList.add("slide-active");
// });

// projectGalleryOthers1.arrowPrevious.addEventListener("click", function () {
//   if (projectGalleryOthers1.firstNumber === 1){
//     projectGalleryOthers1.firstNumber = projectGalleryOthers1.numberOfSlides;
//   } else {
//     --projectGalleryOthers1.firstNumber;
//   } projectGalleryOthers1.projectImage.style.backgroundImage = `url('./assets/images/Others${projectGalleryOthers1.numberOfProject}/${projectGalleryOthers1.firstNumber}.jpg')`;
  
//   let sliderActive1Previous = document.querySelector(`.projectOthers${projectGalleryOthers1.numberOfProject} .slide-active`);
//   sliderActive1Previous.classList.remove("slide-active");
//   sliderActive1Previous = document.querySelector(`.projectOthers${projectGalleryOthers1.numberOfProject} .dot${projectGalleryOthers1.firstNumber}`);
//   sliderActive1.classList.add("slide-active");
// });

// //Parametric

// const projectGalleryOthers2= new ImagesSlidesOthers(3,2);

// projectGalleryOthers2.arrowNext.addEventListener("click", function () {
//   if (projectGalleryOthers2.firstNumber === projectGalleryOthers2.numberOfSlides){
//     projectGalleryOthers2.firstNumber = 1;
//   } else {
//     ++projectGalleryOthers2.firstNumber;
//   } projectGalleryOthers2.projectImage.style.backgroundImage = `url('./assets/images/Others${projectGalleryOthers2.numberOfProject}/${projectGalleryOthers2.firstNumber}.jpg')`;
  
//   let sliderActivePreviousOther2 = document.querySelector(`.projectOthers${projectGalleryOthers2.numberOfProject} .slide-active`);
//   sliderActivePreviousOther2.classList.remove("slide-active");
//   sliderActiveOther2 = document.querySelector(`.projectOthers${projectGalleryOthers2.numberOfProject} .dot${projectGalleryOthers2.firstNumber}`);
//   sliderActiveOther2.classList.add("slide-active");
// });

// projectGalleryOthers2.arrowPrevious.addEventListener("click", function () {
//   if (projectGalleryOthers2.firstNumber === 2){
//     projectGalleryOthers2.firstNumber = projectGalleryOthers2.numberOfSlides;
//   } else {
//     --projectGalleryOthers2.firstNumber;
//   } projectGalleryOthers2.projectImage.style.backgroundImage = `url('./assets/images/Others${projectGalleryOthers2.numberOfProject}/${projectGalleryOthers2.firstNumber}.jpg')`;
  
//   let sliderActive2Previous = document.querySelector(`.projectOthers${projectGalleryOthers2.numberOfProject} .slide-active`);
//   sliderActive2Previous.classList.remove("slide-active");
//   sliderActive2 = document.querySelector(`.projectOthers${projectGalleryOthers2.numberOfProject} .dot${projectGalleryOthers2.firstNumber}`);
//   sliderActive2.classList.add("slide-active");
// });

// //Photos

// const projectGalleryOthers3= new ImagesSlidesOthers(9,3);

// projectGalleryOthers3.arrowNext.addEventListener("click", function () {
//   if (projectGalleryOthers3.firstNumber === projectGalleryOthers3.numberOfSlides){
//     projectGalleryOthers3.firstNumber = 1;
//   } else {
//     ++projectGalleryOthers3.firstNumber;
//   } projectGalleryOthers3.projectImage.style.backgroundImage = `url('./assets/images/Others${projectGalleryOthers3.numberOfProject}/${projectGalleryOthers3.firstNumber}.jpg')`;
  
//   let sliderActivePreviousOther3 = document.querySelector(`.projectOthers${projectGalleryOthers3.numberOfProject} .slide-active`);
//   sliderActivePreviousOther3.classList.remove("slide-active");
//   sliderActiveOther3 = document.querySelector(`.projectOthers${projectGalleryOthers3.numberOfProject} .dot${projectGalleryOthers3.firstNumber}`);
//   sliderActiveOther3.classList.add("slide-active");
// });

// projectGalleryOthers3.arrowPrevious.addEventListener("click", function () {
//   if (projectGalleryOthers3.firstNumber === 3){
//     projectGalleryOthers3.firstNumber = projectGalleryOthers3.numberOfSlides;
//   } else {
//     --projectGalleryOthers3.firstNumber;
//   } projectGalleryOthers3.projectImage.style.backgroundImage = `url('./assets/images/Others${projectGalleryOthers3.numberOfProject}/${projectGalleryOthers3.firstNumber}.jpg')`;
  
//   let sliderActive3Previous = document.querySelector(`.projectOthers${projectGalleryOthers3.numberOfProject} .slide-active`);
//   sliderActive3Previous.classList.remove("slide-active");
//   sliderActive3 = document.querySelector(`.projectOthers${projectGalleryOthers3.numberOfProject} .dot${projectGalleryOthers3.firstNumber}`);
//   sliderActive3.classList.add("slide-active");
// });
// }

// //Animation-on scroll

// const images = document.querySelectorAll('.anim');

// observer = new IntersectionObserver((entries) => {
//    entries.forEach(entry => {
//        if(entry.intersectionRatio > 0) {
//            entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`;
//        }
//        else {
//            entry.target.style.animation = 'none';
//        }
//    })
// })

// images.forEach(image => {
//    observer.observe(image)
// })
