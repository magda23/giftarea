let burgerMenu = document.querySelector(".burger_menu");
let mobileNavigation = document.querySelector(".mobile_navigation");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.querySelector(".burger__").classList.toggle("burg_act");
  mobileNavigation.classList.toggle("nav_act");
  document.body.classList.toggle("overflow_hidden");
});
