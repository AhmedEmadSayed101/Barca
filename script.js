var x = document.querySelector(".header");

document.addEventListener("scroll", function () {
  if (window.scrollY > 380) {
    x.className = "y";
  } else {
    x.className = "header";
  }
});

// METHODS || FUNCTIONS
