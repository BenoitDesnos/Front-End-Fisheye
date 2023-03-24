//Mettre le code JavaScript lié à la page photographer.html
const submitButton = document.querySelector(
  "#contact_modal > div > form > button"
);
const inputsList = document.querySelectorAll("form > div > input");
const likesContainer = document.getElementById("total__likes__container");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let arraySorted;

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
  const mediaFiltered = media.filter((project) => project.photographerId == id);

  mediaFiltered.forEach((project, index) => {
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
  const TEST = document.querySelector(".photographe__article__container");
  console.log(TEST);

  TEST.addEventListener("click", (e) => {
    let index =
      e.target.parentNode.previousSibling.previousSibling.getAttribute(
        "data-index"
      );
    if (
      e.target.getAttribute("class") &&
      e.target.getAttribute("class").includes("likeRef")
    ) {
      let amountOfLikesProject = parseInt(likeButtons[index].textContent);
      let amountOfLikes = parseInt(totalLikes.textContent);
      amountOfLikesProject++;
      amountOfLikes++;

      likes[index].textContent = amountOfLikesProject;
      totalLikes.textContent = amountOfLikes;
    }
  });

  /*   for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener(
      "click",
      () => {
        const test = document.querySelectorAll(".linkToLightbox");
        console.log(test);
        test.forEach((el) => {
          if (el.title === likeButtons[i].title) {
            console.log(el.getAttribute("data-index"));
            console.log(el);
            console.log(i);
          }
        });
        console.log(likeButtons[i]);
        let amountOfLikesProject = parseInt(likeButtons[0].textContent);
        let amountOfLikes = parseInt(totalLikes.textContent);
        amountOfLikesProject++;
        amountOfLikes++;

        likes[0].textContent = amountOfLikesProject;
        totalLikes.textContent = amountOfLikes;
      },
      { once: true }
    );
  } */
}
