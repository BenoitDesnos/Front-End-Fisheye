//Mettre le code JavaScript lié à la page photographer.html

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

function displayPhotographerData({ photographers, media }) {
  const photographersSection = document.querySelector(".photograph-header");
  photographers.forEach((photographer) => {
    if (photographer.id == id) {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getPhotographerDOM();
      photographersSection.appendChild(userCardDOM);
    }
  });
  const photographerMedias = document.querySelector(".photograph-medias");
  const mediaFiltered = media.filter((photo) => photo.photographerId == id);

  console.log(mediaFiltered);
  mediaFiltered.forEach((photo) => {
    console.log(photo.photographerId, media);
    const medias = mediaFactory(photo);
    console.log(photographerMedias);
    const mediasDOM = medias.getMediasDOM();
    photographerMedias.appendChild(mediasDOM);
  });
}

getPhotographers();
