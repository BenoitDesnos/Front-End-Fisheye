// contact modal
const modal = document.getElementById("contact_modal");
const header = document.querySelector("header");
const title = document.querySelector("header > h2");
const contactButton = document.querySelector(
  "#main > .photograph-header > button"
);

// photographer page
const submitButton = document.querySelector(
  "#contact_modal > #modal > form > button"
);

const inputsList = document.querySelectorAll("form > div > input");
const likesContainer = document.getElementById("total__likes__container");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// photographer Factory
let totalLikes = 0;

// lightbox
const links = document.getElementsByClassName("linkToLightbox");
const lightbox = document.querySelector("#lightbox");
const leftArrow = document.querySelector(".lightbox__prev");
const rightArrow = document.querySelector(".lightbox__next");
const lightBoxClose = document.querySelector(".lightbox__close");
let currentIndex;
let currentMedia;
let newMedia;
let mediaTitle;

// sortItem
const optionContainer = document.getElementById("sort-options");
const menuTrigger = document.getElementById("sort-options-button");
const options = document.querySelectorAll(".choosen-option");
const toggleIcon = document.querySelector(".toggle-icon");
