function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

console.log('toggle menu')

  menu.classList.toggle('open')
  console.log('menu')
  icon.classList.toggle('open')
}
//DARK MODE
//SELECT ELEMENT BY ID AND THE BODY ELEMENT
const darkModeToggle =document.getElementById("dark-mode-toggle")
const body = document.body;

//CHECK IF THE DARKMODE WAS PREVIOUSLY ENABLED
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = "☀️ light mode";
} else {
  darkModeToggle.textContent = "🌙 dark mode";
}
//ADDING AN EVENT LISTENER TO TOGGLE THE DARK MODE
darkModeToggle.addEventListener("click",() => {
  body.classList.toggle("dark-mode");

//UPDATE THE LOCAL STORAGE
if (body.classList.contains("dark-mode")) {
  localStorage.setItem("dark-mode", "enabled");
  darkModeToggle.textContent = "☀️ light mode";
} else {
  localStorage.setItem("dark-mode", "disabled");
  darkModeToggle.textContent = "🌙 dark mode ";
}
})