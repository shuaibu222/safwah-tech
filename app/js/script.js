// *********** Navbar DOM *********** //

const hamburgerBtn = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const hamburgerMenu = document.getElementById("hamburger");

// *********** Navbar code *********** //

hamburgerBtn.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // For closing hamburger menu
    header.classList.remove("open");
    hamburgerMenu.classList.add("hidden");
    hamburgerMenu.classList.add("fade-out");
    hamburgerMenu.classList.remove("fade-in");
  } else {
    // For opening hamburger menu
    header.classList.add("open");
    hamburgerMenu.classList.remove("hidden");
    hamburgerMenu.classList.add("fade-in");
    hamburgerMenu.classList.remove("fade-out");
  }
});

// *********** tabs DOM *********** //

const approach = document.querySelector(".methodology");
const tabs = document.querySelectorAll(".list-els");
const content = document.querySelectorAll(".content");

// *********** Tabs code *********** //

approach.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    tabs.forEach(function (li) {
      li.classList.remove("active");
    });

    e.target.classList.add("active");

    content.forEach(function (contents) {
      contents.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
