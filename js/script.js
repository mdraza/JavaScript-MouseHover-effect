const navbar = document.querySelector(".navbar");
const navlink = document.querySelectorAll(".nav-link");

const mouseEvent = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-link");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
        el.style.transition = "0.2s";
      }
    });
  }
};

navbar.addEventListener("mouseover", mouseEvent.bind(0.5));
navbar.addEventListener("mouseout", mouseEvent.bind(1));

//==================== Services Section ==================

const services = document.querySelector(".services");
const box = document.querySelectorAll(".box");

const boxHover = function (e) {
  // if (e.target.closest(".box").classList.contains("box")) {
  const link = e.target.closest(".box");
  const siblings = link.closest(".services").querySelectorAll(".box");

  if (!link) return;

  siblings.forEach((el) => {
    if (el == link) {
      el.style.boxShadow = this;
      el.style.transition = "0.4s";
      el.style.borderRadius = "8px";
    }
  });
  // }
};

services.addEventListener("mouseover", boxHover.bind(["1px 1px 10px #576ef2"]));

services.addEventListener("mouseout", boxHover.bind(["1px 1px 5px #33333383"]));
