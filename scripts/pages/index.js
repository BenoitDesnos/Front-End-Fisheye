function displayHomeData({ photographers }) {
  console.log(photographers);
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer, false);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

getPhotographers();
