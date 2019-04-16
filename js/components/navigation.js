/*
'use strict';

// opens mobile nav and toggles menu aria attributes and tabindex for screen readers
const mainNavButton = document.querySelector('.main-nav-button');
const navCabinet = document.querySelector('.nav__cabinet');
const navLinks = document.getElementsByClassName('nav-link');
const nav = document.querySelector('.nav');
const navDrawerButtons = document.getElementsByClassName('nav-drawer__btn');
const navDrawers = document.getElementsByClassName('nav-drawer');
let mainNavButtonClickCount = 0;
let firstNavDrawerButtonClickCount = 0;
let secondNavDrawerButtonClickCount = 0;
let thirdNavDrawerButtonClickCount = 0;
let fourthNavDrawerButtonClickCount = 0;

mainNavButton.addEventListener('click', _ => {
  mainNavButtonClickCount++;
  if (mainNavButtonClickCount%2 == 0) {
    mainNavButton.setAttribute('aria-expanded', false);
    navCabinet.setAttribute('aria-hidden', true);
  } else {
    mainNavButton.setAttribute('aria-expanded', true);
    navCabinet.setAttribute('aria-hidden', false);
  };
  navCabinet.classList.toggle('js-nav__cabinet');
});

if (window.innerWidth <= 768) {
  navCabinet.setAttribute('aria-hidden', true);
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].setAttribute('tabIndex', '-1');
  };
};

// navCabinet children are not focusable via "Tab" key when page first loads to mobile
if (navCabinet.getAttribute('aria-hidden') == 'true') {
  for (let i = 0; i < navDrawers.length; i++) {
    if (navDrawers[i].parentElement.classList.contains('nav-list--primary')) {
      navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
      navDrawers[i].children.item(1).setAttribute('tabIndex', '-1'); 
    };
    if (navDrawers[i].parentElement.classList.contains('nav-list--secondary')) {
      navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
    };
  };
};

// navCabinet children are not focusable via "Tab" key when mobile menu button is clicked and navCabinet is not visible
mainNavButton.addEventListener('click', _ => {
  if (navCabinet.getAttribute('aria-hidden') == 'false') {
    for (let i = 0; i < navDrawers.length; i++) {
      if (navDrawers[i].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '0');
        navDrawers[i].children.item(1).setAttribute('tabIndex', '0'); 
      };
      if (navDrawers[i].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '0');
      };
    };
  } else {
    for (let i = 0; i < navDrawers.length; i++) {
      if (navDrawers[i].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
        navDrawers[i].children.item(1).setAttribute('tabIndex', '-1'); 
      };
      if (navDrawers[i].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
      };
    };
  };
});

window.addEventListener('resize', _ => {
  if (window.innerWidth <= 768) {
    navCabinet.setAttribute('aria-hidden', true);
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].setAttribute('tabIndex', '-1');
    };
  } else {
    navCabinet.setAttribute('aria-hidden', false);
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].removeAttribute('tabIndex');
    };
  };
  if (navCabinet.classList.contains('js-nav__cabinet')) {
    navCabinet.setAttribute('aria-hidden', false);
  };
});

// manages tabIndex when 'nav-drawer__btn'(s) are toggled. Further research needed for cleaner solution. Maybe make repeated code a function call?
navDrawerButtons[0].addEventListener('click', (e) => {
  firstNavDrawerButtonClickCount++;
  if (firstNavDrawerButtonClickCount%2 == 0) {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

navDrawerButtons[1].addEventListener('click', (e) => {
  secondNavDrawerButtonClickCount++;
  if (secondNavDrawerButtonClickCount%2 == 0) {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

navDrawerButtons[2].addEventListener('click', (e) => {
  thirdNavDrawerButtonClickCount++;
  if (thirdNavDrawerButtonClickCount%2 == 0) {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

navDrawerButtons[3].addEventListener('click', (e) => {
  fourthNavDrawerButtonClickCount++;
  if (fourthNavDrawerButtonClickCount%2 == 0) {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (let i = 0; i < e.target.nextElementSibling.children.length; i++) {
      e.target.nextElementSibling.children[i].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

// opens dropdown menu on click
navCabinet.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-drawer__btn')) {
    e.target.classList.toggle('js-nav-drawer__btn');
    e.target.nextElementSibling.classList.toggle('js-nav-drawer__list');
    e.target.parentElement.classList.toggle('js-nav-drawer');
    e.target.firstElementChild.classList.toggle('js-rotate'); // breaks  on IE11. Place last so code before it is parsed before the entire function breaks and pauses. Avoid using firstChild because it selects white space as a node.
  };
});

// Prevents navDrawerButtons height from stretching beyond 3.9em when user clicks off from them
navCabinet.addEventListener('click', (e) => {
  if (!e.target.classList.contains('js-nav-drawer__btn')) {
    for (let i = 0; i < navDrawerButtons.length; i++) {
      navDrawerButtons[i].style.height="3.9em";
    };
  };
});

// hides mobile nav when clicked outside itself and toggles menu aria attributes for screen readers
document.addEventListener('click', (e) => {
  if (navCabinet.classList.contains('js-nav__cabinet') && !(e.target.parentNode.classList.contains('nav') || 
        e.target.parentNode.classList.contains('nav__bar') ||
        e.target.parentNode.classList.contains('nav-drawer') ||
        e.target.parentNode.classList.contains('search-bar') ||
        e.target.parentNode.classList.contains('search-bar__btn') ||
        e.target.parentNode.classList.contains('svg-inline--fa') ||
        e.target.tagName.toLowerCase() == 'svg' ||
        e.target.tagName.toLowerCase() == 'button' ||
        e.target.tagName.toLowerCase() == 'a' || 
        e.target.tagName.toLowerCase() == 'abbr')) {
    navCabinet.classList.toggle('js-nav__cabinet');
    mainNavButtonClickCount++;
    // navCabinet children are not focusable via "Tab" key when mobile nav is closed when clicked outside itself
    for (let i = 0; i < navDrawers.length; i++) {
      if (navDrawers[i].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
        navDrawers[i].children.item(1).setAttribute('tabIndex', '-1'); 
      };
      if (navDrawers[i].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
      };
    };
    if (mainNavButtonClickCount%2 == 0) {
      mainNavButton.setAttribute('aria-expanded', false);
      navCabinet.setAttribute('aria-hidden', true);
    } else {
      mainNavButton.setAttribute('aria-expanded', true);
      navCabinet.setAttribute('aria-hidden', false);
    };
  };
});

// removes hover on 'nav-drawer__list' when 'nav-drawer__btn' is touched on mobile portrait and screen is rotated to landscape
nav.addEventListener('touchstart', (e) => {
  if (e.target.classList.contains('nav-drawer__btn')) {
    e.target.parentElement.classList.add('js-no-hover');
    e.target.nextElementSibling.classList.add('js-no-hover');  
  } else if (!(e.target.classList.contains('nav-drawer__btn'))) {
    for (let i = 0; i < navDrawers.length; i++) {
     navDrawers[i].classList.remove('js-no-hover');
    };
    for (let i = 0; i < navDrawerButtons.length; i++) {
     navDrawerButtons[i].nextElementSibling.classList.remove('js-no-hover');
    };
  };    
});
*/

/*
//TOO EXPENSIVE TO BE DEEMED USEFUL. ACCESSIBILITY IS IMPORTANT BUT MY SANITY TAKES PRIORITY. LEAVING THIS HERE IN CASE I EVER WANT TO RETURN TO THIS HELLHOLE OF A PROBLEM FOR GOD KNOWS WHY
// navCabinet children are not focusable via "Tab" key when page is resized to mobile amd navCabinet is not visible
window.addEventListener('resize', _ => {
  if ((window.innerWidth <= 768) && (navCabinet.getAttribute('aria-hidden') == 'true'))  {
    for (let i = 0; i < navDrawers.length; i++) {
      if (navDrawers[i].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
        navDrawers[i].children.item(1).setAttribute('tabIndex', '-1'); 
      };
      if (navDrawers[i].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '-1');
      };
    };
    console.log('test');
  } else if ((window.innerWidth > 768) && (navCabinet.getAttribute('aria-hidden') == 'false')) {
    for (let i = 0; i < navDrawers.length; i++) {
      if (navDrawers[i].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '0');
        navDrawers[i].children.item(1).setAttribute('tabIndex', '0'); 
      };
      if (navDrawers[i].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '0');
      };
    };
    console.log('test2')
  } else if ((window.innerWidth <= 768) && (navCabinet.getAttribute('aria-hidden') == 'false')) {
    for (let i = 0; i < navDrawers.length; i++) {
      if (navDrawers[i].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '0');
        navDrawers[i].children.item(1).setAttribute('tabIndex', '0'); 
      };
      if (navDrawers[i].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[i].children.item(0).setAttribute('tabIndex', '0');
      };
    };
    console.log('test3')
  };
});
*/
'use strict';

// opens mobile nav and toggles menu aria attributes and tabindex for screen readers

var mainNavButton = document.querySelector('.main-nav-button');
var navCabinet = document.querySelector('.nav__cabinet');
var navLinks = document.getElementsByClassName('nav-link');
var nav = document.querySelector('.nav');
var navDrawerButtons = document.getElementsByClassName('nav-drawer__btn');
var navDrawers = document.getElementsByClassName('nav-drawer');
var mainNavButtonClickCount = 0;
var firstNavDrawerButtonClickCount = 0;
var secondNavDrawerButtonClickCount = 0;
var thirdNavDrawerButtonClickCount = 0;
var fourthNavDrawerButtonClickCount = 0;

mainNavButton.addEventListener('click', function (_) {
  mainNavButtonClickCount++;
  if (mainNavButtonClickCount % 2 == 0) {
    mainNavButton.setAttribute('aria-expanded', false);
    navCabinet.setAttribute('aria-hidden', true);
  } else {
    mainNavButton.setAttribute('aria-expanded', true);
    navCabinet.setAttribute('aria-hidden', false);
  };
  navCabinet.classList.toggle('js-nav__cabinet');
});

if (window.innerWidth <= 768) {
  navCabinet.setAttribute('aria-hidden', true);
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].setAttribute('tabIndex', '-1');
  };
};

// navCabinet children are not focusable via "Tab" key when page first loads to mobile
if (navCabinet.getAttribute('aria-hidden') == 'true') {
  for (var _i = 0; _i < navDrawers.length; _i++) {
    if (navDrawers[_i].parentElement.classList.contains('nav-list--primary')) {
      navDrawers[_i].children.item(0).setAttribute('tabIndex', '-1');
      navDrawers[_i].children.item(1).setAttribute('tabIndex', '-1');
    };
    if (navDrawers[_i].parentElement.classList.contains('nav-list--secondary')) {
      navDrawers[_i].children.item(0).setAttribute('tabIndex', '-1');
    };
  };
};

// navCabinet children are not focusable via "Tab" key when mobile menu button is clicked and navCabinet is not visible
mainNavButton.addEventListener('click', function (_) {
  if (navCabinet.getAttribute('aria-hidden') == 'false') {
    for (var _i2 = 0; _i2 < navDrawers.length; _i2++) {
      if (navDrawers[_i2].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[_i2].children.item(0).setAttribute('tabIndex', '0');
        navDrawers[_i2].children.item(1).setAttribute('tabIndex', '0');
      };
      if (navDrawers[_i2].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[_i2].children.item(0).setAttribute('tabIndex', '0');
      };
    };
  } else {
    for (var _i3 = 0; _i3 < navDrawers.length; _i3++) {
      if (navDrawers[_i3].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[_i3].children.item(0).setAttribute('tabIndex', '-1');
        navDrawers[_i3].children.item(1).setAttribute('tabIndex', '-1');
      };
      if (navDrawers[_i3].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[_i3].children.item(0).setAttribute('tabIndex', '-1');
      };
    };
  };
});

window.addEventListener('resize', function (_) {
  if (window.innerWidth <= 768) {
    navCabinet.setAttribute('aria-hidden', true);
    for (var _i4 = 0; _i4 < navLinks.length; _i4++) {
      navLinks[_i4].setAttribute('tabIndex', '-1');
    };
  } else {
    navCabinet.setAttribute('aria-hidden', false);
    for (var _i5 = 0; _i5 < navLinks.length; _i5++) {
      navLinks[_i5].removeAttribute('tabIndex');
    };
  };
  if (navCabinet.classList.contains('js-nav__cabinet')) {
    navCabinet.setAttribute('aria-hidden', false);
  };
});

// manages tabIndex when 'nav-drawer__btn'(s) are toggled. Further research needed for cleaner solution. Maybe make repeated code a function call?
navDrawerButtons[0].addEventListener('click', function (e) {
  firstNavDrawerButtonClickCount++;
  if (firstNavDrawerButtonClickCount % 2 == 0) {
    for (var _i6 = 0; _i6 < e.target.nextElementSibling.children.length; _i6++) {
      e.target.nextElementSibling.children[_i6].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (var _i7 = 0; _i7 < e.target.nextElementSibling.children.length; _i7++) {
      e.target.nextElementSibling.children[_i7].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

navDrawerButtons[1].addEventListener('click', function (e) {
  secondNavDrawerButtonClickCount++;
  if (secondNavDrawerButtonClickCount % 2 == 0) {
    for (var _i8 = 0; _i8 < e.target.nextElementSibling.children.length; _i8++) {
      e.target.nextElementSibling.children[_i8].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (var _i9 = 0; _i9 < e.target.nextElementSibling.children.length; _i9++) {
      e.target.nextElementSibling.children[_i9].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

navDrawerButtons[2].addEventListener('click', function (e) {
  thirdNavDrawerButtonClickCount++;
  if (thirdNavDrawerButtonClickCount % 2 == 0) {
    for (var _i10 = 0; _i10 < e.target.nextElementSibling.children.length; _i10++) {
      e.target.nextElementSibling.children[_i10].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (var _i11 = 0; _i11 < e.target.nextElementSibling.children.length; _i11++) {
      e.target.nextElementSibling.children[_i11].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

navDrawerButtons[3].addEventListener('click', function (e) {
  fourthNavDrawerButtonClickCount++;
  if (fourthNavDrawerButtonClickCount % 2 == 0) {
    for (var _i12 = 0; _i12 < e.target.nextElementSibling.children.length; _i12++) {
      e.target.nextElementSibling.children[_i12].firstElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    for (var _i13 = 0; _i13 < e.target.nextElementSibling.children.length; _i13++) {
      e.target.nextElementSibling.children[_i13].firstElementChild.removeAttribute('tabIndex');
    };
  };
});

// opens dropdown menu on click
navCabinet.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-drawer__btn')) {
    e.target.classList.toggle('js-nav-drawer__btn');
    e.target.nextElementSibling.classList.toggle('js-nav-drawer__list');
    e.target.parentElement.classList.toggle('js-nav-drawer');
    e.target.firstElementChild.classList.toggle('js-rotate'); // breaks  on IE11. Place last so code before it is parsed before the entire function breaks and pauses. Avoid using firstChild because it selects white space as a node.
  };
});

// Prevents navDrawerButtons height from stretching beyond 3.9em when user clicks off from them
navCabinet.addEventListener('click', function (e) {
  if (!e.target.classList.contains('js-nav-drawer__btn')) {
    for (var _i14 = 0; _i14 < navDrawerButtons.length; _i14++) {
      navDrawerButtons[_i14].style.height = "3.9em";
    };
  };
});

// hides mobile nav when clicked outside itself and toggles menu aria attributes for screen readers
document.addEventListener('click', function (e) {
  if (navCabinet.classList.contains('js-nav__cabinet') && !(e.target.parentNode.classList.contains('nav') || e.target.parentNode.classList.contains('nav__bar') || e.target.parentNode.classList.contains('nav-drawer') || e.target.parentNode.classList.contains('search-bar') || e.target.parentNode.classList.contains('search-bar__btn') || e.target.parentNode.classList.contains('svg-inline--fa') || e.target.tagName.toLowerCase() == 'svg' || e.target.tagName.toLowerCase() == 'button' || e.target.tagName.toLowerCase() == 'a' || e.target.tagName.toLowerCase() == 'abbr')) {
    navCabinet.classList.toggle('js-nav__cabinet');
    mainNavButtonClickCount++;
    // navCabinet children are not focusable via "Tab" key when mobile nav is closed when clicked outside itself
    for (var _i15 = 0; _i15 < navDrawers.length; _i15++) {
      if (navDrawers[_i15].parentElement.classList.contains('nav-list--primary')) {
        navDrawers[_i15].children.item(0).setAttribute('tabIndex', '-1');
        navDrawers[_i15].children.item(1).setAttribute('tabIndex', '-1');
      };
      if (navDrawers[_i15].parentElement.classList.contains('nav-list--secondary')) {
        navDrawers[_i15].children.item(0).setAttribute('tabIndex', '-1');
      };
    };
    if (mainNavButtonClickCount % 2 == 0) {
      mainNavButton.setAttribute('aria-expanded', false);
      navCabinet.setAttribute('aria-hidden', true);
    } else {
      mainNavButton.setAttribute('aria-expanded', true);
      navCabinet.setAttribute('aria-hidden', false);
    };
  };
});

// removes hover on 'nav-drawer__list' when 'nav-drawer__btn' is touched on mobile portrait and screen is rotated to landscape
nav.addEventListener('touchstart', function (e) {
  if (e.target.classList.contains('nav-drawer__btn')) {
    e.target.parentElement.classList.add('js-no-hover');
    e.target.nextElementSibling.classList.add('js-no-hover');
  } else if (!e.target.classList.contains('nav-drawer__btn')) {
    for (var _i16 = 0; _i16 < navDrawers.length; _i16++) {
      navDrawers[_i16].classList.remove('js-no-hover');
    };
    for (var _i17 = 0; _i17 < navDrawerButtons.length; _i17++) {
      navDrawerButtons[_i17].nextElementSibling.classList.remove('js-no-hover');
    };
  };
});