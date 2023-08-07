const customSelect = document.querySelector(".custom-select");
const selectedItem = customSelect.querySelector(".selected-item");
const options = customSelect.querySelector(".options");

selectedItem.addEventListener("click", () => {
  options.classList.toggle("show");
});

options.addEventListener("click", (event) => {
  if (event.target.classList.contains("option")) {
    selectedItem.textContent = event.target.textContent;
    options.classList.remove("show");
  }
});

document.addEventListener("click", (event) => {
  if (!customSelect.contains(event.target)) {
    options.classList.remove("show");
  }
});
