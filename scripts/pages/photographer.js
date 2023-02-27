//Mettre le code JavaScript lié à la page photographer.html
const submitButton = document.querySelector(
  "#contact_modal > div > form > button"
);
const inputsList = document.querySelectorAll("form > div > input");
const likesContainer = document.getElementById("total__likes__container");

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

function displayPhotographerData({ photographers, media }) {
  // display data about phototgrapher

  const photographersSection = document.querySelector(".photograph-header");
  photographers.forEach((photographer) => {
    if (photographer.id == id) {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getPhotographerDOM();
      console.log(userCardDOM);
      photographersSection.appendChild(userCardDOM);
    }
  });
  // display project/media data of photographer
  const photographerMedias = document.querySelector(
    ".photographe__article__container"
  );
  const mediaFiltered = media.filter((project) => project.photographerId == id);

  mediaFiltered.forEach((project, index) => {
    console.log(index);
    const medias = mediaFactory(project, mediaFiltered.length, index);
    const mediasDOM = medias.getMediasDOM();

    photographerMedias.appendChild(mediasDOM);
  });
  openLightbox();
  addLike();
}

getPhotographers();

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputsList.forEach((input) => {
    console.log(input.name + ":", input.value);
  });
});

/* Gestion des likes */
function addLike() {
  const likeButtons = document.getElementsByClassName("like__button");
  const likes = document.getElementsByClassName("likes");
  const totalLikes = document.querySelector(".total__likes");
  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener(
      "click",
      () => {
        let amountOfLikesProject = parseInt(likeButtons[i].textContent);
        let amountOfLikes = parseInt(totalLikes.textContent);
        amountOfLikesProject++;
        amountOfLikes++;
        console.log(amountOfLikes);
        likes[i].textContent = amountOfLikesProject;
        totalLikes.textContent = amountOfLikes;
      },
      { once: true }
    );
  }
}
