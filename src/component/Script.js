const hamburger1 = document.querySelector(".hamburger1");
const nav_menu1 = document.querySelector(".navbar_items1");
const nav_menu2 = document.querySelector(".navbar_items2");

hamburger1.addEventListener("click", () => {
  hamburger1.classList.toggle("active");
  nav_menu1.classList.toggle("active");
  nav_menu2.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger1.classList.remove("active");
    nav_menu1.classList.remove("active");
    hamburger2.classList.remove("active");
    nav_menu2.classList.remove("active");
  })
);
