async function getPhotographers() {
  const response = await fetch("../../data/photographers.json");
  const photographers = await response.json();
  return photographers;
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  switch (window.location.pathname) {
    case "/":
      displayHomeData(photographers);
      break;
    case "/photographer.html":
      displayPhotographerData(photographers, media);
      break;
    default:
      //displayError404
      break;
  }
}
