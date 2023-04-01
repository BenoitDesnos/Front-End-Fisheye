async function getPhotographers() {
  const response = await fetch("../../data/photographers.json");
  const photographers = await response.json();
  console.log(photographers);
  return photographers;
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  console.log(photographers);
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
