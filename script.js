const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
// sideMenu open
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// sideMenu close
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// changing theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
});
