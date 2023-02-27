const modal = document.getElementById("contact_modal");
const header = document.querySelector("header");
const title = document.querySelector("header > h2");
const contactButton = document.querySelector(
  "#main > div.photograph-header > button"
);

function displayModal() {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  header.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "hidden";
  title.textContent = `Contactez-moi ${photographerName}`;
  // gere le focus lorsque la modal est ouverte
  focusModals("modal");
}

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  header.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "visible";

  header.focus();
}

document.addEventListener("keydown", (e) => {
  if (modal.getAttribute("aria-hidden") == "false" && e.key === "Escape") {
    closeModal();
  }
});
