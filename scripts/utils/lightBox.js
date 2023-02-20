const links = document.getElementsByClassName("linkToLightbox");
const lightbox = document.querySelector(".lightbox");

const htmlToAdd = `<i class="lightbox__close fa-solid fa-xmark"></i>
<i class="lightbox__next fa-solid fa-chevron-right"></i>
<i class="lightbox__prev fa-solid fa-chevron-left"></i>`;

function displaylightbox() {
  for (let link of links) {
    link.addEventListener("click", (e) => {
      lightboxContainer.innerHTML =
        htmlToAdd + e.target.outerHTML + `<p>${e.target.alt}</p>`;
      lightbox.style.display = "flex";
      lightbox.setAttribute("aria-hidden", "false");
      header.setAttribute("aria-hidden", "true");
      main.setAttribute("aria-hidden", "true");
    });
  }
}
function closeLightbox() {
  for (let link of links) {
    link.addEventListener("click", (e) => {
      lightbox.style.display = "none";
      lightbox.setAttribute("aria-hidden", "true");
      header.setAttribute("aria-hidden", "false");
      main.setAttribute("aria-hidden", "false");
    });
  }
}

document.addEventListener("keydown", (e) => {
  if (lightbox.getAttribute("aria-hidden") == "false" && e.key === "Escape") {
    closeLightbox();
  }
});
