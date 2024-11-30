window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
  
    document.querySelectorAll('.scroll-animate').forEach(function(element) {
      const elementTop = element.offsetTop;
      if (scrollPosition > elementTop + 100) {  // 100px before element is fully in view
        element.classList.add('show');
      }
    });
  });

/************************************************ Book View JS *******************************************/
  
  'use strict';



/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnelem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnelem(navbarLinks, "click", closeNavbar);



/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}
/*********************************************cart JS **************************************************************/
addEventOnelem(tabCard, "click", navigateTab);

function Buy_Alert() {
  var Buy_confirm;
  if (confirm("Confirm your purchase?")) {
      Buy_confirm = ".Your purchase has been successfully confirmed";
  }
  else {
      Buy_confirm = ""
  }
  document.getElementById("buy_confirm").innerHTML = Buy_confirm;
}