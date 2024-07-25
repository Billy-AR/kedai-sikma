// Burger Menu
const menu = document.querySelector(".navbar-nav");
const hm = document.getElementById("hamburger-menu");

hm.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  e.preventDefault();
});

// Searchform active
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const sb = document.getElementById("search-button");

sb.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

// Shopping cart active
const sc = document.querySelector(".shopping-cart");
const lsc = document.querySelector("#shopping-cart");

lsc.addEventListener("click", function (e) {
  sc.classList.toggle("active");
  e.preventDefault();
});

// Product icons active
const pi = document.querySelectorAll(".item-detail-button");
const modal = document.querySelector("#item-detail-modal");

pi.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    modal.style.display = "flex";
    e.preventDefault();
  });
});

// close icons active
const close = document.querySelector(".close-icon");

close.addEventListener("click", function (e) {
  modal.style.display = "none";
  e.preventDefault();
});

// Klik di luar elemen

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !lsc.contains(e.target)) {
    sc.classList.remove("active");
  }
});

// diluar modal
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
