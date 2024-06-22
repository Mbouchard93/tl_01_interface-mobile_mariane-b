/** Je crois qu'il aurait été préférable de nommer ce fichier dialog et non menu */

/**
 * @type {NodeListOf<Element>}
 */
const dialogs = document.querySelectorAll(".header__mobile");

/**
 * @type {NodeListOf<Element>}
 */
const btnDialog = document.querySelectorAll("button[data-dialog]");

/**

 * @param {Event} e 
 */
function closingDialog(e) {
  const dialog = e.target;

  dialog.removeAttribute("closing");
  dialog.removeAttribute("open", "");

  dialog.removeEventListener("animationend", closingDialog);
}


/**
 * @param {Element} dialog 
 */

function closeDialog(dialog) {
  dialog.setAttribute("closing", "");
  dialog.addEventListener("animationend", closingDialog);
}

btnDialog.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialogSelector = btn.getAttribute("data-dialog");
    const dialog = document.querySelector(dialogSelector);
    if (dialog) {
      if (dialog.checkVisibility()) {
        closeDialog(dialog);
      } else {
        dialog.setAttribute("open", "");
      }
    }
  });
});

dialogs.forEach((dialog) => {
  dialog.addEventListener("click", () => {});
  const childrens = dialog.querySelectorAll("& > *");
  childrens.forEach((children) => {
    children.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
    });
  });
});
