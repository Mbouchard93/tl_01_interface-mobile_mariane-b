/**
 * @type {NodeListOf<Element>}
 */
const cards = document.querySelectorAll(".card");

input.addEventListener("input", () => {
  const searchValue = input.value.toLowerCase();
  cards.forEach((card) => {
    const searchData = card.getAttribute("data-search").toLocaleLowerCase();
    if (searchData.includes(searchValue)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

