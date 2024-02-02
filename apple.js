var isMenuOpen = false;

function toggleMenu() {
  var menuLinks = document.querySelector('.menu-links');
  isMenuOpen = !isMenuOpen;
  menuLinks.classList.toggle('show-menu', isMenuOpen);

  // Add event listener to close the menu when a button is clicked
  if (isMenuOpen) {
    menuLinks.addEventListener('click', closeMenuOnClick);
  } else {
    menuLinks.removeEventListener('click', closeMenuOnClick);
  }
}

function closeMenuOnClick() {
  var menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.remove('show-menu');
  isMenuOpen = false;
  menuLinks.removeEventListener('click', closeMenuOnClick);
}