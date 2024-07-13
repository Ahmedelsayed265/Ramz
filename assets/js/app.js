// nav bar fixed up
let header = document.querySelector("header");
let main = document.querySelector("main");
window.addEventListener("scroll", () => {
  if (this.scrollY > 130) {
    header.classList.add("sticky");
    main.classList.add("main_fixed");
  } else {
    header.classList.remove("sticky");
    main.classList.remove("main_fixed");
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
    !event.target.closest(".navigation_links") &&
    !event.target.closest(".toggle_menu") &&
    !event.target.closest(".dropdown-menu")
  ) {
    menu.classList.remove("show");
    toggler.classList.remove("open");
  }
});

//aos
$(document).ready(function () {
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  AOS.init({
    offset: 20,
    delay: 20,
    duration: 750,
    once: true
  });
});
//swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
$(document).ready(function () {
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)"
  });
});
