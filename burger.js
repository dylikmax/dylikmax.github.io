const burger = document.querySelector(".burger");
const sideMenu = document.querySelector(".side-menu");
let isActive = false;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  sideMenu.classList.toggle("active");
  if (isActive) {
    burger_icon.src = "img/burger_icon.svg";
    overlay.classList.remove("visible");
  } else {
    burger_icon.src = "img/cross_icon.svg";
    overlay.classList.toggle("visible");
  }
  isActive = !isActive;
});

sideMenu.querySelector(".side-menu__container").addEventListener("click", (e) => {
  console.log(e);
  if (e.target.nodeName === "A") {
    burger.classList.remove("active");
    sideMenu.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    burger.classList.remove("active");
    sideMenu.classList.remove("active");
    if (isActive) {
      burger_icon.src = "img/burger_icon.svg";
      overlay.classList.remove("visible");
      isActive = !isActive;
    }
  }
});

const navButtons = document.querySelectorAll(".side-menu__nav-button");
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    burger_icon.src = "img/burger_icon.svg";
    overlay.classList.remove("visible");
    isActive = !isActive;
  })
})
