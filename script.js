const ratingSide = document.getElementById("rating-side");
const thanksSide = document.getElementById("thanks-side");
const ratingButtons = document.getElementById("rating-buttons");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");

const toggleSide = () => {
  ratingSide.classList.add("hidden");
  thanksSide.classList.remove("hidden");
};

ratingButtons.addEventListener("click", (e) => {
  result.textContent = e.target.value;
});

const validationError = (btn) => {
  btn.classList.remove("error");

  setTimeout(() => {
    btn.classList.add("error");
  }, 1);
};

submitBtn.addEventListener("click", (e) => {
  if (result.textContent !== "0") {
    toggleSide();
  } else {
    validationError(e.target);
  }
});
