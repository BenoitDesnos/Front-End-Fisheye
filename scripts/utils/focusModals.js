// add all the elements inside modals which you want to make focusable
function focusModals(id) {
  const focusableElements = "button, input";
  const modals = document.getElementById(id); // select the modals by it's id
  const firstFocusableElement = modals.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modals
  const focusableContent = modals.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modals
  lastFocusableElement.focus();
  document.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab";

    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  console.log(firstFocusableElement);
}
