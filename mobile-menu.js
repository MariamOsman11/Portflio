const hamburgermenu = document.querySelector('#hamburger-menu-id');
const closingmenu = document.querySelector('#closingmenu');

function openmenu() {
  document.getElementById('mobile-menu').style.visibility = 'visible';
}
hamburgermenu.addEventListener('click', openmenu);

function closemenu() {
  document.getElementById('mobile-menu').style.visibility = 'hidden';
}
closingmenu.addEventListener('click', closemenu);