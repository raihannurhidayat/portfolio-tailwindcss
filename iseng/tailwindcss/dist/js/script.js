// nav-fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
