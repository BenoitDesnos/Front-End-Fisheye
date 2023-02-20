function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;
  let picture;
  let mediaImg;
  const article = document.createElement("article");

  if (image !== undefined) {
    picture = `assets/SamplePhotos/${photographerId}/${image}`;
    mediaImg = document.createElement("img");
  } else {
    picture = `assets/SamplePhotos/${photographerId}/${video}`;
    mediaImg = document.createElement("video");
  }
  mediaImg.setAttribute("src", picture);
  mediaImg.setAttribute("alt", title);
  mediaImg.classList.add("linkToLightbox");

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const likesElement = document.createElement("span");
  likesElement.innerHTML = likes + ' <i class="fa-solid fa-heart"></i>';

  function getMediasDOM() {
    article.appendChild(mediaImg);
    article.appendChild(titleElement);
    article.appendChild(likesElement);
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
