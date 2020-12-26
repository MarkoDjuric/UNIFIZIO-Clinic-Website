const menu = document.querySelector('#mobile-menu');
const menuLInks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.getElementsByClassName('navbar__link');
let clicked = false;
var s = document.createElement('style');
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
      




  
  
 

