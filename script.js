function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

console.log('toggle menu')

  menu.classList.toggle('open')
  console.log('menu')
  icon.classList.toggle('open')
}
