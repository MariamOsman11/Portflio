// const mobileMenu = document.querySelector('#mobile-menuid');
const hamburgermenu = document.querySelector('#hamburger-menu-id');
const closingmenu = document.querySelector('#closingmenu');

function openmenu() {
   document.getElementById('mobile-menu').style.visibility = 'visible';
}

hamburgermenu.addEventListener('click', openmenu);
closingmenu.addEventListener('click', closemenu);

function closemenu() {
   document.getElementById('mobile-menu').style.visibility = 'hidden';
}
