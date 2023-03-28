let totalLikes = 0;
function mediaFactory(data, lengthArray, index) {
  const { id, photographerId, title, image, video, likes, date, price } = data;
  totalLikes += likes;

  let picture;
  let media;
  const article = document.createElement("article");
  article.setAttribute("data-date", date);

  if (image) {
    picture = `assets/SamplePhotos/${photographerId}/${image}`;
    media = document.createElement("img");
  } else {
    picture = `assets/SamplePhotos/${photographerId}/${video}`;
    media = document.createElement("video");
  }
  media.setAttribute("src", picture);
  media.setAttribute("alt", title + ", closeup view");
  media.setAttribute("title", title);
  media.setAttribute("tabindex", "0");
  media.classList.add("linkToLightbox");

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const likesElement = document.createElement("button");
  likesElement.innerHTML = `<span class="likes likeRef" aria-label="likes">${likes}</span> <i class="fa-solid fa-heart likeRef"></i>`;
  likesElement.setAttribute("class", "like__button");
  likesElement.setAttribute("title", title);

  // create element when in last loop.
  let totalLikesElement;
  if (index == lengthArray - 1) {
    totalLikesElement = document.createElement("span");
    totalLikesElement.innerHTML = `<span class="total__likes">${totalLikes}</span> <i class="fa-solid fa-heart"></i>`;
  }

  function getMediasDOM() {
    article.appendChild(media);
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
