let totalLikes = 0;
function mediaFactory(data, lengthArray, index) {
  const { id, photographerId, title, image, video, likes, date, price } = data;
  totalLikes += likes;

  let picture;
  let mediaImg;
  const article = document.createElement("article");
  article.setAttribute("data-date", date);

  if (image) {
    picture = `assets/SamplePhotos/${photographerId}/${image}`;
    mediaImg = document.createElement("img");
  } else {
    picture = `assets/SamplePhotos/${photographerId}/${video}`;
    mediaImg = document.createElement("video");
  }
  mediaImg.setAttribute("src", picture);
  mediaImg.setAttribute("alt", title);
  mediaImg.setAttribute("tabindex", "0");
  mediaImg.classList.add("linkToLightbox");

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const likesElement = document.createElement("button");
  likesElement.innerHTML = `<p class="likes">${likes}</p> <i class="fa-solid fa-heart"></i>`;
  likesElement.setAttribute("class", "like__button");

  // create element when its last
  let totalLikesElement;
  if (index == lengthArray - 1) {
    totalLikesElement = document.createElement("span");
    totalLikesElement.innerHTML = `<p class="total__likes">${totalLikes}</p> <i class="fa-solid fa-heart"></i>`;
  }

  function getMediasDOM() {
    article.appendChild(mediaImg);
    article.appendChild(titleElement);
    article.appendChild(likesElement);
    totalLikesElement ? likesContainer.appendChild(totalLikesElement) : null;
    return article;
  }

  return {
    id,
    photographerId,
    title,
    image,
    likes,
    date,
    price,
    getMediasDOM,
  };
}
