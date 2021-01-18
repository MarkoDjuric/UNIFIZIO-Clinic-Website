const menu = document.querySelector('#mobile-menu');
const menuLInks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.getElementsByClassName('navbar__link');
let clicked = false;
var s = document.createElement('style');
// Slider elements
const tiltes = ["Primena najsavremenijih aparata i procedura Fizikalne Medicine", "Individualni pristup svakom pacijentu","Mesto koje vas vraća u pokret","Vodite računa o svom telu","Kompletna fizikalna terapija"]
let counter = 1
const wrapper = document.getElementById("wrapper");
let start = false;
let mainTitle = document.getElementById("main_title");
//Dotts elements by className
let dottBtns = Object.values(document.getElementsByClassName('dottBtn'));

s.type = 'text/css';
const mobileMenu = () => {

   menu.classList.toggle('is-active')
   menuLInks.classList.toggle('active')
   body.classList.toggle('active')

   navbar.style.backgroundColor = 'black'

   // remove border-right
//    let sheet = new CSSStyleSheet()
//    sheet.replaceSync('.navbar__link{border-right:none}');
 
// // Apply the stylesheet to a document:
// document.adoptedStyleSheets = [sheet];

s.innerText = '.navbar__link{border-right:none}';
document.head.appendChild(s);

   clicked = !clicked

   if(clicked === false) {
  // style border-right again
      // sheet.replaceSync('.navbar__link{border-right:3px solid rgb(255, 255, 255);}');
      // sheet.replaceSync('.navbar__link{border-right:3px solid rgb(255, 255, 255);}');

      s.innerText = '.navbar__link{border-right:3px solid rgb(255, 255, 255);}'
      navbar.style.backgroundColor = null;
   }
}

  menu.addEventListener('click', mobileMenu)
      


//  IMAGE SLIDER

//Right button
document.getElementById("right-arrow").addEventListener("click", (event)=> {
event.preventDefault();
console.log(counter)
start = true

counter++
if (counter <= 5) {


wrapper.style.background = 'url(images/HOMEPAGE/sliders/Image-'+counter+'.jpg) no-repeat top center';
wrapper.style.backgroundSize = 'cover';
 mainTitle.textContent = tiltes[counter-1]

}else if (counter === 6){

wrapper.style.background = 'url(images/HOMEPAGE/sliders/Image-1.jpg) no-repeat top center';
wrapper.style.backgroundSize = 'cover';
counter = 1
mainTitle.textContent = tiltes[counter-1]
}
console.log(counter)
}

);
//Left button
 document.getElementById("left-arrow").addEventListener("click", (event)=> {
event.preventDefault();
console.log(counter)

if (counter === 1 && start === false){
   counter--
   counter = 5
   start = true

 wrapper.style.background = 'url(images/HOMEPAGE/sliders/Image-'+counter+'.jpg) no-repeat top center'
 wrapper.style.backgroundSize = 'cover'
 mainTitle.textContent = tiltes[counter-1]
}else if ( counter > 1) {
   counter --
wrapper.style.background = 'url(images/HOMEPAGE/sliders/Image-'+counter+'.jpg) no-repeat top center'
wrapper.style.backgroundSize = 'cover'
mainTitle.textContent = tiltes[counter-1]
}else if(counter === 1 && start===true) {
  counter = 5
wrapper.style.background = 'url(images/HOMEPAGE/sliders/Image-'+counter+'.jpg) no-repeat top center'
wrapper.style.backgroundSize = 'cover'
mainTitle.textContent = tiltes[counter-1]
}
console.log(counter)
}

);

// Dott buttons
dottBtns.forEach(element => { element.addEventListener('click', () => {
   var number = element.getAttribute("data-img")
   wrapper.style.background = 'url(images/HOMEPAGE/sliders/Image-'+number+'.jpg) no-repeat top center'
   wrapper.style.backgroundSize = 'cover'
   mainTitle.textContent = tiltes[number-1]
   // Update current image position
   counter = number
})});
  
  
 
// Lightbox Gallery
(function() {


   var images = document.querySelectorAll('.fleximg');
   var container = document.querySelector('.lightbox');
   var item = document.querySelector('.lightbox-item');
    var close = document.querySelector('.lightbox-close');
    var btnleft = document.querySelector('.btnLeft');
    var btnright = document.querySelector('.btnRight');
   
   var imgArray = [];
   var counter = 0;
   
   images.forEach((img) => {
     imgArray.push(img.src);
   
   });
   
   images.forEach(function(elem) {
     elem.addEventListener('click',function(event) {
         var src = event.target.src;
         counter = imgArray.indexOf(src)
         item.style.backgroundImage = `url(${src})`
         container.classList.add('show'); // bez tacke kod .add('imenekeklasa')
   
     })
   
    close.addEventListener('click', function() {
        container.classList.remove('show');
    })
   
   })
   
   btnleft.addEventListener('click', function(){
   
    counter--
   
    if (counter < 0) {
   
        counter = imgArray.length-1
   }
      item.style.backgroundImage = `url(${imgArray[counter]})`
  })
   
    btnright.addEventListener('click', function(){
   
    counter++
   
     if (counter > imgArray.length-1) {
    counter = 0
   
   }
        item.style.backgroundImage = `url(${imgArray[counter]})`
    })
   
   
   })();
   



   // Smooth scrolling
   const makeNavLinksSmooth = () => {
      const navLinks = document.querySelectorAll('.navbar__link');

      for (let n in navLinks) {
         if(navLinks.hasOwnProperty(n)){
            navLinks[n].addEventListener('click', e => {
               e.preventDefault();
               document.querySelector(navLinks[n].hash).scrollIntoView({
                  behavior: "smooth"
               });

            });
         }
      }
   }
   
      // function call
   makeNavLinksSmooth();
