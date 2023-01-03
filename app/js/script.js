// *********** Navbar DOM *********** //

const hamburgerBtn = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const hasFade = document.querySelector(".has-fade");

// *********** tabs DOM *********** //

const approach = document.querySelector(".methodology");
const tabs = document.querySelectorAll(".list-els");
const content = document.querySelectorAll(".content");

// *********** Navbar code *********** //

hamburgerBtn.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // For closing hamburger menu
    header.classList.remove("open");
    hasFade.classList.add("has-fade");
  } else {
    // For opening hamburger menu
    header.classList.add("open");
    hasFade.classList.remove("has-fade");
  }
});

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
