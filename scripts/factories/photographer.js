// eslint-disable-next-line no-unused-vars

function photographerFactory(data, isAh1) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const article = document.createElement("article");

  const linkToPhotographer = document.createElement("a");
  linkToPhotographer.setAttribute("href", `/photographer.html?id=${id}`);
  linkToPhotographer.setAttribute("aria-label", `lien vers ${name} profil`);
  linkToPhotographer.classList.add("portrait__container");

  const portraitElement = document.createElement("img");
  portraitElement.setAttribute("src", picture);
  portraitElement.setAttribute("alt", `Photo ${name}`);
  let nameElement;
  isAh1 === true
    ? (nameElement = document.createElement("h1"))
    : (nameElement = document.createElement("h2"));
  nameElement.textContent = name;

  const locationElement = document.createElement("h3");
  locationElement.textContent = city + ", " + country;

  const taglineElement = document.createElement("p");
  taglineElement.textContent = tagline;

  const priceElement = document.createElement("span");
  priceElement.textContent = price + "€/jour";

  const textContainer = document.createElement("div");

  function getUserCardDOM() {
    article.appendChild(linkToPhotographer);
    linkToPhotographer.appendChild(portraitElement);
    linkToPhotographer.appendChild(nameElement);
    article.appendChild(locationElement);
    article.appendChild(taglineElement);
    article.appendChild(priceElement);
    return article;
  }

  function getPhotographerDOM() {
    article.appendChild(textContainer);
    textContainer.appendChild(nameElement);
    textContainer.appendChild(locationElement);
    textContainer.appendChild(taglineElement);
    article.appendChild(portraitElement);
    likesContainer.appendChild(priceElement);
    return article;
  }
  return {
    name,
    picture,
    city,
    country,
    tagline,
    price,
    id,
    getUserCardDOM,
    getPhotographerDOM,
  };
}
