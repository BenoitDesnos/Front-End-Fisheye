const links = document.getElementsByClassName("linkToLightbox");

const leftArrow = document.querySelector(".lightbox__prev");
const lightbox = document.querySelector(".lightbox");
let currentIndex = 0;

let displayContentLightbox = function (e) {
  const image = document.createElement(e.target.localName);
  console.log(e);
  image.setAttribute("src", e.target.attributes[0].value);
  image.setAttribute("alt", e.target.alt);
  image.setAttribute("data-index", e.target.attributes[3].value);

  image.classList.add("lightboxImage");
  lightboxContainer.appendChild(image);
  lightbox.style.display = "flex";
  lightbox.setAttribute("aria-hidden", "false");
  header.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "true");
};
let rightClick = function (e) {
  const image = document.querySelector(".lightboxImage");
  currentIndex = image.getAttribute("data-index");
  console.log(typeof currentIndex);
  currentIndex = parseInt(currentIndex) + 1;

  image.setAttribute("src", links[currentIndex].attributes[0].value);
  image.setAttribute("data-index", currentIndex);
};
let leftClick = function (e) {
  const image = document.querySelector(".lightboxImage");
  currentIndex = image.getAttribute("data-index");
  console.log(typeof currentIndex);
  currentIndex = parseInt(currentIndex) - 1;
  image.setAttribute("src", links[currentIndex].attributes[0].value);
  image.setAttribute("data-index", currentIndex);
};

function nextLightbox() {
  const rightArrow = document.querySelector(".lightbox__next");
  rightArrow.addEventListener("click", rightClick);
}
function prevLightbox() {
  const leftArrow = document.querySelector(".lightbox__prev");
  leftArrow.addEventListener("click", leftClick);
}

function openLightbox() {
  nextLightbox();
  prevLightbox();
  for (let i = 0; i < links.length; i++) {
    /* console.log(links.length);
    links[i].addEventListener("click", (e) => {
      console.log(e);
      const image = document.createElement(e.target.localName);
      image.setAttribute("src", e.target.attributes[0].value);
      image.setAttribute("alt", e.target.alt);
      image.classList.add("lightboxImage");
      lightboxContainer.appendChild(image);
      lightbox.style.display = "flex";
      lightbox.setAttribute("aria-hidden", "false");
      header.setAttribute("aria-hidden", "true");
      main.setAttribute("aria-hidden", "true");
    }); */

    links[i].addEventListener("click", displayContentLightbox, false);
  }
}
function closeLightbox() {
  lightbox.setAttribute("aria-hidden", "true");
  header.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "false");

  lightbox.style.display = "none";
  const image = document.querySelector(".lightboxImage");
  image.remove();
}

document.addEventListener("keydown", (e) => {
  if (lightbox.getAttribute("aria-hidden") == "false" && e.key === "Escape") {
    closeLightbox();
  }
});
