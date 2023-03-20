const optionContainer = document.getElementById("sort-options");
const options = document.querySelectorAll(".choosen-option");

optionContainer.addEventListener("click", () => {
  toggleSortElement();
});

function sortOptions(e) {
  let newSort = e.target.textContent;
  let oldSort = options[0].textContent;
  e.target.textContent = oldSort;
  options[0].textContent = newSort;

  if (e.target.localName === "li") {
    switchProjects(newSort);
  }
}
chooseSortElement();
function chooseSortElement() {
  options[0].addEventListener("click", (e) => {
    sortOptions(e);
  });
  options[1].addEventListener("click", (e) => {
    sortOptions(e);
  });
  options[2].addEventListener("click", (e) => {
    sortOptions(e);
  });
}

function toggleSortElement() {
  if (optionContainer.style.height === "180px") {
    optionContainer.style.height = "65px";
    options[0].style.border = "none";
    options[1].style.display = "none";
    options[2].style.display = "none";
  } else {
    optionContainer.style.height = "180px";
    options[0].style.borderBottom = "white solid 1px";
    options[1].style.display = "block";
    options[2].style.display = "block";
  }
}

function switchProjects(sortText) {
  switch (sortText) {
    case "Titre":
      sortByTitles();
      break;
    case "Date":
      sortByDates();
      break;
    case "Popularité":
      sortByLikes();
      break;

    default:
      break;
  }
}

function sortByLikes() {
  const parent = document.querySelector(".photographe__article__container");
  const articles = document.querySelectorAll(
    ".photographe__article__container > article"
  );
  Array.from(articles)
    .sort(function (a, b) {
      return getPrice(b) - getPrice(a);
    })
    .forEach(function (el) {
      parent.appendChild(el);
    });
}
function sortByDates() {
  const parent = document.querySelector(".photographe__article__container");
  const articles = document.querySelectorAll(
    ".photographe__article__container > article"
  );
  Array.from(articles)
    .sort(function (a, b) {
      return getDate(a) - getDate(b);
    })
    .forEach(function (el) {
      parent.appendChild(el);
    });
}
function sortByTitles() {
  const parent = document.querySelector(".photographe__article__container");
  const articles = document.querySelectorAll(
    ".photographe__article__container > article"
  );
  Array.from(articles)
    .sort(function (a, b) {
      return getTitle(b) > getTitle(a) ? -1 : 1;
    })
    .forEach(function (el) {
      parent.appendChild(el);
    });
}

function getPrice(article) {
  return Number(article.querySelector(".like__button > .likes").textContent);
}
function getDate(article) {
  return new Date(article.dataset.date);
}
function getTitle(article) {
  return article.textContent;
}
