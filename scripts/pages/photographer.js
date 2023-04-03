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
  const imageContainer = document.querySelector(
    ".photographe__article__container"
  );

  imageContainer.addEventListener("click", (e) => {
    let button = e.target.closest("button") // gère la condition du clique à la souris
      ? e.target.closest("button")
      : e.target.localName === "button" // gère la condition du focus + enter
      ? e.target
      : null;
    // verifie si le bouton a déjà été liké ou non
    if (button && !button.className.includes("liked")) {
      let index = e.target.previousSibling.previousSibling.getAttribute(
        "data-index"
      )
        ? e.target.previousSibling.previousSibling.getAttribute("data-index")
        : e.target.parentNode.previousSibling.previousSibling.getAttribute(
            "data-index"
          );

      let amountOfLikesProject = parseInt(likeButtons[index].textContent);
      let amountOfLikes = parseInt(totalLikes.textContent);
      amountOfLikesProject++;
      amountOfLikes++;
      likes[index].textContent = amountOfLikesProject;
      totalLikes.textContent = amountOfLikes;
      button.classList.add("liked");
    }
  });
}

async function displayPhotographerData(photographers, media) {
  // display data about phototgrapher
  const photographersSection = document.querySelector(".photograph-header");
  photographers.forEach((photographer) => {
    if (photographer.id == id) {
      const photographerModel = photographerFactory(photographer, true);
      const userCardDOM = photographerModel.getPhotographerDOM();
      photographersSection.appendChild(userCardDOM);
      openModal.addEventListener("click", () => {
        displayModal(photographerModel.name);
      });
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
  // ***********  fn that needs dom elements created from fetch ************//
  addLike();
  openLightbox();
}

init();
