const modal = document.getElementById("contact_modal");
const header = document.querySelector("header");
const main = document.querySelector("main");
console.log(closeBtn);

function displayModal() {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  header.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  header.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "visible";
}

document.addEventListener("keydown", (e) => {
  if (modal.getAttribute("aria-hidden") == "false" && e.key === "Escape") {
    closeModal();
  }
});
