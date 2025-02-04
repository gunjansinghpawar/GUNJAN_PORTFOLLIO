// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

function redirectToNetflixRepository() {
  window.location.href = './404.html';
}

function redirectToTravelFrontendRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/frontend-djtoursandtravels'; 
}

function redirectToTravelBackendRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/backend-djtoursandtravels'; 
}
function redirectToPortfolioRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/GUNJAN_PORTFOLLIO';
}

function redirectToCalcRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/Calculator';
}

function redirectToMusicRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/Spotify--refrence';
}

function redirectToCoffeeRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/Coffee';
}

function redirectToTextRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/TextUtils';
}

function redirectToLibraryRepository(){
  window.location.href = 'https://github.com/gunjansinghpawar/librarySystem';
}
function scrollProjects(direction) {
  const container = document.querySelector('.project-container');
  const scrollAmount = 300; // Adjust scroll distance as needed

  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
