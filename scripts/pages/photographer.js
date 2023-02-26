//Mettre le code JavaScript lié à la page photographer.html
const submitButton = document.querySelector(
  "#contact_modal > div > form > button"
);
const inputsList = document.querySelectorAll("form > div > input");
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

function displayPhotographerData({ photographers, media }) {
  // display data about phototgrapher

  const photographersSection = document.querySelector(".photograph-header");
  photographers.forEach((photographer) => {
    if (photographer.id == id) {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getPhotographerDOM();
      photographersSection.appendChild(userCardDOM);
    }
  });
  // display project/media data of photographer
  const photographerMedias = document.querySelector(
    ".photographe__article__container"
  );
  const mediaFiltered = media.filter((photo) => photo.photographerId == id);

  mediaFiltered.forEach((project) => {
    const medias = mediaFactory(project, mediaFiltered);
    const mediasDOM = medias.getMediasDOM();
    photographerMedias.appendChild(mediasDOM);
  });
  openLightbox();
}

getPhotographers();

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputsList.forEach((input) => {
    console.log(input.name + ":", input.value);
  });
});
