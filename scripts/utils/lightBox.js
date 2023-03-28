const links = document.getElementsByClassName("linkToLightbox");
const lightbox = document.querySelector("#lightbox");
const leftArrow = document.querySelector(".lightbox__prev");
const rightArrow = document.querySelector(".lightbox__next");
const lightBoxClose = document.querySelector(".lightbox__close");

let currentIndex;
let currentMedia;
let newMedia;
let mediaTitle;

/* -------------------- fn de gestion du contenu de la lightbox------------------- */
// crée un élément dynamiquement selon le type de média passé en argument
const createContentLightbox = (currentIndex, typeOfMedia) => {
  newMedia = document.createElement(typeOfMedia);
  mediaTitle = document.createElement("span");
  // on récupère le média qui contient les attributs suivant ou précédent grace à currentIndex
  const attributesContainer = document.querySelector(
    `div.photographe__article__container > article:nth-child(${
      currentIndex + 1
    }) > ${typeOfMedia}`
  );
  // on recupère les attributs et les passons au nouveau média créé
  newMedia.setAttribute("src", attributesContainer.getAttribute("src"));
  newMedia.setAttribute("alt", attributesContainer.getAttribute("alt"));
  newMedia.setAttribute(
    "data-index",
    attributesContainer.getAttribute("data-index")
  );
  newMedia.classList.add("lightboxImage");
  //créé titre du média
  mediaTitle.textContent = attributesContainer.getAttribute("alt");
};

const displayContentLightbox = (e, typeOfMedia) => {
  // on créé un média pour l'affichage
  // si utilisation du scroll fleché
  if (typeOfMedia) {
    createContentLightbox(currentIndex, typeOfMedia);
  }
  // si ouverture lightbox
  else {
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    createContentLightbox(currentIndex, e.target.localName);
    console.log(currentIndex, links.length - 1);
    currentIndex === 0
      ? hideLeftArrow()
      : currentIndex === links.length - 1
      ? hideRightArrow()
      : null;
  }
  // append les éléments créés
  lightboxContainer.appendChild(newMedia);
  lightboxContainer.appendChild(mediaTitle);
  // gestion du style et des attributs quand lightbox visible

  ariaParameters(true);
  lightbox.style.display = "flex";

  // close right & left controls
  lightboxControls();
  // gere le focus lorsque la modal est ouverte
  focusModals("lightbox");
};

function removeContentLightBox() {
  const span = document.querySelector("#lightboxContainer > span");
  const media = document.querySelector(".lightboxImage");
  media.remove();
  span.remove();
}

const scrollContentLightbox = () => {
  console.log("scroll");
  removeContentLightBox();
  if (links[currentIndex].localName === "video") {
    displayContentLightbox(null, "video");
  } else {
    displayContentLightbox(null, "img");
  }
};
/* ------------------- fn de gestion des controls de la lightbox------------------ */

function lightboxControls() {
  rightArrow.addEventListener("click", scrollRight);
  leftArrow.addEventListener("click", scrollLeft);
  lightBoxClose.addEventListener("click", closeLightbox);

  // inclusiv closing "Escape" key
  document.addEventListener("keydown", (e) => {
    if (lightbox.getAttribute("aria-hidden") == "false" && e.key === "Escape") {
      closeLightbox();
    }
  });
}
// fn permettant de lancer les eventlistener dans scripts > pages > photographer.js > displayPhotographerData()
function openLightbox() {
  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute("data-index", i);
    links[i].addEventListener("click", (e) => displayContentLightbox(e), null);
    links[i].addEventListener("keydown", (e) => {
      if (
        (lightbox.getAttribute("aria-hidden") == "true" && e.key === "Enter") ||
        e.key === " " // spaceBar key
      ) {
        e.preventDefault();
        displayContentLightbox(e);
      }
    });
  }
}

function closeLightbox() {
  removeContentLightBox();
  ariaParameters(false);
  lightbox.style.display = "none";
  showArrows();
  links[currentIndex].focus();
}
function showArrows() {
  rightArrow.style.display = "block";
  leftArrow.style.display = "block";
}
function hideRightArrow() {
  currentIndex >= links.length - 1
    ? (rightArrow.style.display = "none")
    : (leftArrow.style.display = "block");
}
function hideLeftArrow() {
  currentIndex <= 0
    ? (leftArrow.style.display = "none")
    : (rightArrow.style.display = "block");
}
const scrollRight = () => {
  // gestion de l'index pour afficher les éléments suivants
  getIndex();
  currentIndex++;
  hideRightArrow();
  scrollContentLightbox();
};

const scrollLeft = () => {
  // gestion de l'index pour afficher les éléments précédents
  getIndex();
  currentIndex--;
  hideLeftArrow();
  scrollContentLightbox();
};

/* ------------------------------- fn générales ----------------------------- */
function ariaParameters(isLightboxOpen) {
  if (isLightboxOpen) {
    lightbox.setAttribute("aria-hidden", "false");
    header.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "true");
  } else {
    lightbox.setAttribute("aria-hidden", "true");
    header.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "false");
  }
}
//récupère index
const getIndex = () => {
  const media = document.querySelector(".lightboxImage");
  currentIndex = media.getAttribute("data-index");
  currentIndex = parseInt(currentIndex);
};
