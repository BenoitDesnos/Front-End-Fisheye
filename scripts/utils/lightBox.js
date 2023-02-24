const links = document.getElementsByClassName("linkToLightbox");
const leftArrow = document.querySelector(".lightbox__prev");
const lightbox = document.querySelector(".lightbox");
const rightArrow = document.querySelector(".lightbox__next");
let currentIndex = 0;
let array = [];

const displayContentLightbox = (e) => {
  const image = document.createElement(e.target.localName);
  console.log(e);
  image.setAttribute("src", e.target.attributes[0].value);
  image.setAttribute("alt", e.target.attributes[1].value);
  image.setAttribute("data-index", e.target.attributes[4].value);
  image.classList.add("lightboxImage");

  const span = document.createElement("span");
  span.textContent = e.target.attributes[1].value;

  lightboxContainer.appendChild(image);
  lightboxContainer.appendChild(span);

  lightbox.style.display = "flex";
  lightbox.setAttribute("aria-hidden", "false");
  header.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "true");
};

let rightClick = function (e) {
  const image = document.querySelector(".lightboxImage");
  console.log(links[currentIndex].localName);
  const span = document.querySelector("#lightboxContainer > span");
  currentIndex = image.getAttribute("data-index");
  span.textContent = links[currentIndex].getAttribute("alt");

  currentIndex = parseInt(currentIndex) + 1;
  console.log(links[currentIndex]);
  currentIndex >= links.length - 1
    ? (rightArrow.style.display = "none")
    : (leftArrow.style.display = "block");
  image.setAttribute("src", links[currentIndex].attributes[0].value);
  image.setAttribute("data-index", currentIndex);

  /* if (links[currentIndex].localName === "video") {
    const video = document.createElement("video");
    video.innerHTML = image.innerHTML;
    console.log(image.outerHTML);
    image.parentNode.replaceChild(video, image);
  } */
};

let leftClick = function (e) {
  const image = document.querySelector(".lightboxImage");
  const span = document.querySelector("#lightboxContainer > span");
  currentIndex = image.getAttribute("data-index");
  span.textContent = links[currentIndex].getAttribute("alt");
  currentIndex = parseInt(currentIndex) - 1;
  currentIndex <= 0
    ? (leftArrow.style.display = "none")
    : (rightArrow.style.display = "block");
  image.setAttribute("src", links[currentIndex].attributes[0].value);
  image.setAttribute("data-index", currentIndex);
};

function closeLightboxFn() {
  const close = document.querySelector(".lightbox__close");
  close.addEventListener("click", closeLightbox);
}

function openLightbox() {
  rightArrow.addEventListener("click", rightClick);
  leftArrow.addEventListener("click", leftClick);
  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute("data-index", i);
    links[i].addEventListener("click", displayContentLightbox, false);
  }
  closeLightboxFn();
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
