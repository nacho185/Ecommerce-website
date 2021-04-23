let menuList = document.getElementById("menuItems");

menuList.style.maxHeight = "0px";
function menuToggle() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "200px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
let search = document.getElementById("click-for-search");
let searchBar = document.getElementById("searchbar");
let brand = document.getElementById("brand-name");

function toggleSearch() {
  if (searchBar.style.display === "none") {
    searchBar.style.display = "inline-block";
    searchBar.style.zIndex = "998";
    brand.style.display = "none";
  } else {
    searchBar.style.display = "none";
    brand.style.display = "inline-block";
  }
}
/*
let brand = document.getElementById("brand-name");
let phoneMedia = window.matchMedia("(max-width:425px)");
function forMedia() {
  if ((brand.style.display === "inline-block") & (phoneMedia === "true")) {
    brand.style.display = "none";
  } else {
    brand.style.display = "inline-block";
  }
}*/
