const optionContainer = document.getElementById("sort-options");
const options = document.querySelectorAll(".choosen-option");

function sortProjects() {
  optionContainer.addEventListener("click", (e) => {
    toggleSortElement();
  });
}

function sortOptions(e) {
  let newSort = e.target.textContent;
  let oldSort = options[0].textContent;
  e.target.textContent = oldSort;
  options[0].textContent = newSort;

  if (e.target.localName === "li") {
    console.log(newSort);
    switchProjects(newSort);
  }
}
chooseSortElement();
function chooseSortElement() {
  options[0].addEventListener("click", (e) => {
    console.log("test");
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
  if (optionContainer.style.height === "65px") {
    optionContainer.style.height = "180px";
    options[0].style.borderBottom = "white solid 1px";
    options[1].style.display = "block";
    options[2].style.display = "block";
  } else {
    optionContainer.style.height = "65px";
    options[0].style.border = "none";
    options[1].style.display = "none";
    options[2].style.display = "none";
  }
}

function switchProjects(sortText) {
  console.log(sortText);
  switch (sortText) {
    case "Titre":
      console.log(sortText);
      sortByTitles();
      break;
    case "Date":
      console.log(sortText);
      sortByDates();
      break;
    case "Popularité":
      console.log(sortText);
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
    .forEach(function (ele) {
      parent.appendChild(ele);
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
    .forEach(function (ele) {
      parent.appendChild(ele);
    });
}
function sortByTitles() {
  const parent = document.querySelector(".photographe__article__container");
  const articles = document.querySelectorAll(
    ".photographe__article__container > article"
  );
  Array.from(articles)
    .sort(function (a, b) {
      return getTitle(a) < getTitle(b) ? -1 : 1;
    })
    .forEach(function (ele) {
      parent.appendChild(ele);
    });
}

function getPrice(article) {
  return Number(article.querySelector(".like__button > .likes").textContent);
}
function getDate(article) {
  return new Date(article.dataset.date);
}
function getTitle(article) {
  console.log(article.textContent[0]);
  return article.textContent;
}
