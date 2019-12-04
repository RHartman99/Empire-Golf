// Adds accordion functionality to the navbar
// for mobile users
window.onload = () => {
  const accordionButton = document.querySelector("#menu_btn");
  const panel = document.querySelector("#mobile-menu");

  accordionButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (panel.classList.contains("opened")) {
      panel.classList.remove("opened");
      accordionButton.classList.remove("active");
    } else {
      panel.classList.add("opened");
      accordionButton.classList.add("active");
    }
  });

  document.querySelectorAll(".mobile-menu__menu-item").forEach(el => {
    el.addEventListener("click", () => {
      panel.classList.remove("opened");
      accordionButton.classList.remove("active");
    });
  });
};
