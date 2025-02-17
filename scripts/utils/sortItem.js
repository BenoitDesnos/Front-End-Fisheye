menuTrigger.addEventListener("click", () => {
  toggleSortElement();
});

function toggleSortElement() {
  if (optionContainer.style.height === "180px") {
    menuTrigger.setAttribute("aria-expanded", "false");
    optionContainer.style.height = "65px";
    toggleIcon.style.transform = "rotate(0deg)";
    options[0].style.border = "none";
    options[1].style.display = "none";
    options[2].style.display = "none";
  } else {
    menuTrigger.setAttribute("aria-expanded", "true");
    optionContainer.style.height = "180px";
    toggleIcon.style.transform = "rotate(180deg)";
    options[0].style.borderBottom = "white solid 1px";
    options[1].style.display = "block";
    options[2].style.display = "block";
  }
}

function sortOptions(e) {
  let newSort = e.target.textContent;
  let oldSort = options[0].textContent;
  e.target.textContent = oldSort;
  options[0].textContent = newSort;
  switchToSort(newSort);
  menuTrigger.focus();
}
chooseSortElement();
function chooseSortElement() {
  options[0].addEventListener("click", (e) => {
    sortOptions(e);
    toggleSortElement();
  });
  options[1].addEventListener("click", (e) => {
    sortOptions(e);
    toggleSortElement();
  });
  options[2].addEventListener("click", (e) => {
    sortOptions(e);
    toggleSortElement();
  });
}

function switchToSort(sortText) {
  switch (sortText) {
    case "Titre":
      sortBy("Title", getTitle);
      break;
    case "Date":
      sortBy("Date", getDate);
      break;
    case "Popularité":
      sortBy("Popularity", getLikes);
      break;
    default:
      break;
  }
}

function sortBy(sortType, elementToSort) {
  const parent = document.querySelector(".photographe__article__container");
  const articles = document.querySelectorAll(
    ".photographe__article__container > article"
  );

  Array.from(articles)
    .sort(function (a, b) {
      return sortType === "Date"
        ? elementToSort(a) - elementToSort(b)
        : sortType === "Popularity"
        ? elementToSort(b) - elementToSort(a)
        : sortType === "Title" && elementToSort(b) > elementToSort(a)
        ? -1
        : 1;
    })
    .map(function (el, index) {
      const dataIndexToUpdate = el.querySelector(".linkToLightbox");
      dataIndexToUpdate.setAttribute("data-index", index);
      parent.appendChild(el);
    });
}

function getLikes(article) {
  return Number(article.querySelector(".like__button > .likes").textContent);
}
function getDate(article) {
  return new Date(article.dataset.date);
}
function getTitle(article) {
  return article.textContent;
}
