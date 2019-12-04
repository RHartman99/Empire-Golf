// Adds accordion functionality to the navbar
// for mobile users
window.onload = () => {
  const accordionButton = document.querySelector("#menu_btn");
  const panel = document.querySelector("#mobile-menu");
  const deadzone = document.querySelector("#deadzone");

  deadzone.addEventListener("click", e => {
    e.preventDefault();
    panel.classList.remove("opened");
    accordionButton.classList.remove("active");
    deadzone.classList.remove("active");
  });

  deadzone.addEventListener("touchstart", e => {
    e.preventDefault();
    panel.classList.remove("opened");
    accordionButton.classList.remove("active");
    deadzone.classList.remove("active");
  });

  accordionButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (panel.classList.contains("opened")) {
      panel.classList.remove("opened");
      accordionButton.classList.remove("active");
      deadzone.classList.remove("active");
    } else {
      panel.classList.add("opened");
      accordionButton.classList.add("active");
      deadzone.classList.add("active");
    }
  });

  accordionButton.addEventListener("touchstart", function(e) {
    e.preventDefault();
    if (panel.classList.contains("opened")) {
      panel.classList.remove("opened");
      accordionButton.classList.remove("active");
      deadzone.classList.remove("active");
    } else {
      panel.classList.add("opened");
      accordionButton.classList.add("active");
      deadzone.classList.add("active");
    }
  });
};
