const hamburgermenu = document.querySelector('#hamburger-menu-id');
const closingmenu = document.querySelector('#closingmenu');

function openmenu() {
  document.getElementById('mobile-menu').style.visibility = 'visible';
  document.getElementById('main-header').style.filter = 'blur(8px)';

}
hamburgermenu.addEventListener('click', openmenu);

function closemenu() {
  document.getElementById('mobile-menu').style.visibility = 'hidden';
  document.body.style.filter = 'blur(0)';
}
closingmenu.addEventListener('click', closemenu);