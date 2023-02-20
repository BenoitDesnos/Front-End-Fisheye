const links = document.getElementsByClassName("linkToLightbox");
const leftArrow = document.querySelector(".lightbox__prev");
console.log(leftArrow);
const lightbox = document.querySelector(".lightbox");
let globalIndex = 0;

let displayContentLightbox = function (e) {
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
};

function nextLightbox() {
  const rightArrow = document.querySelector(".lightbox__next");
  rightArrow.addEventListener("click", () => {
    const image = document.querySelector(".lightboxImage");
    let i = globalIndex + 1;
    console.log(i);
    image.setAttribute("src", links[i].attributes[0].value);
    globalIndex = i;
  });
}
function prevLightbox() {
  const leftArrow = document.querySelector(".lightbox__prev");

  leftArrow.addEventListener("click", () => {
    const image = document.querySelector(".lightboxImage");
    let i = globalIndex - 1;

    image.setAttribute("src", links[i].attributes[0].value);
    globalIndex = i;
  });
}

function openLightbox() {
  nextLightbox();
  for (let i = 0; i < links.length; i++) {
    /*   links[i].addEventListener("click", (e) => {
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

  prevLightbox();
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
