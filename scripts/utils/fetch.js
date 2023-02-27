function getPhotographers() {
  fetch("../../data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      switch (window.location.pathname) {
        case "/":
          displayHomeData(data);
          break;
        case "/photographer.html":
          displayPhotographerData(data);
          break;

        default:
          //displayError404
          break;
      }
    })
    .catch((err) =>
      console.log(
        "Une erreur s'est produite sur la fonction getPhotographers ",
        err
      )
    );
}
