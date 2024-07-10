// nav bar fixed up
let header = document.querySelector("header");
let main = document.querySelector("main");
window.addEventListener("scroll", () => {
  if (this.scrollY > 130) {
    header.classList.add("sticky");
    main.style.margin = "130px 0 0";
  } else {
    header.classList.remove("sticky");
    main.style.margin = "0";
  }
});

//toogle menu
let toggler = document.querySelector(".toggle_menu");
let menu = document.querySelector(".navigation_links");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("open");
  } else {
    toggler.classList.remove("open");
  }
});
document.addEventListener("click", function (event) {
  if (
    menu.classList.contains("show") &&
    !event.target.closest(".nav-links") &&
    !event.target.closest(".toggle_menu")
  ) {
    menu.classList.remove("show");
    toggler.classList.remove("open");
  }
});
