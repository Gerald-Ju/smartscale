const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");
const ingredient = document.getElementById("ingredient");
const weight = document.getElementById("weight");
const insertBtn = document.getElementById("insertBtn");
const output = document.getElementById("output");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
  const element = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const weighMenu = document.querySelector("#weigh-page");

  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // Adds the 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    weighMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    homeMenu.classList.remove("highlight");
    return;
  }

  if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
    element.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile Menu when clicking on menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

insertBtn.onclick = function () {
  const key = ingredient.value;
  const value = weight.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = this.localStorage.key(i);
  const value = localStorage.getItem(key);

  output.innerHTML += `${key}: ${value}<br />`;
}
