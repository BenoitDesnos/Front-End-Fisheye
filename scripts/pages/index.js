function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

  fetch("../../data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      displayData(data.photographers);
    })
    .catch((err) =>
      console.log(
        "Une erreur s'est produite sur la fonction getPhotographers ",
        err
      )
    );

  // et bien retourner le tableau photographers seulement une fois récupéré
}

function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

getPhotographers();
