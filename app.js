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
      




  
  
 

