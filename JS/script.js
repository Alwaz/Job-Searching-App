// get the input text on button click
let search = document
  .querySelector(".search__button")
  .addEventListener("click", () => {
    let text = document.getElementById("filter-jobs").value;
    console.log(text, "whats in text");
  });
