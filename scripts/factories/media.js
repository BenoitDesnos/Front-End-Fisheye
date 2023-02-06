function mediaFactory(data) {
  /*  console.log(data); */
  const { id, photographerId, title, image, likes, date, price } = data;
  const picture = `assets/SamplePhotos/${photographerId}/${image}`;

  const article = document.createElement("article");
  const mediaImg = document.createElement("img");
  mediaImg.setAttribute("src", picture);
  mediaImg.setAttribute("alt", title);

  /*   const titleElement = document.createElement("h3");
  titleElement.textContent = city + ", " + country;

  const likesElement = document.createElement("span");
  likesElement.textContent = city + ", " + country; */

  function getMediasDOM() {
    article.appendChild(mediaImg);
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
