function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const portraitContainer = document.createElement("div");
    portraitContainer.classList.add("portrait__container");
    article.appendChild(portraitContainer);

    const portraitElement = document.createElement("img");
    portraitElement.setAttribute("src", picture);
    portraitContainer.appendChild(portraitElement);

    const portraitHover = document.createElement("div");
    portraitHover.classList.add("portrait__hover");
    portraitContainer.appendChild(portraitHover);

    const nameElement = document.createElement("h2");
    nameElement.textContent = name;
    article.appendChild(nameElement);

    const locationElement = document.createElement("h3");
    locationElement.textContent = city + ", " + country;
    article.appendChild(locationElement);

    const taglineElement = document.createElement("p");
    taglineElement.textContent = tagline;
    article.appendChild(taglineElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = price + "€/jour";
    article.appendChild(priceElement);

    return article;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}
