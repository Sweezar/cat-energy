let navToggler = document.querySelector(".page-header__toggle");
let navList = document.querySelector(".main-nav__list");

navList.classList.remove("main-nav__list--no-js");
navList.classList.add("main-nav__list--closed");

navToggler.addEventListener('click', ()=> {
  navList.classList.toggle("main-nav__list--closed");
})
