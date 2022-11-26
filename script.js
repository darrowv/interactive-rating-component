const ratingSide = document.getElementById("rating-side");
const thanksSide = document.getElementById("thanks-side");
const numbers = document.getElementById("numbers");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");

const toggleSide = () => {
  ratingSide.classList.add("hidden");
  thanksSide.classList.remove("hidden");
};

numbers.addEventListener("click", (e) => {
  if (numbers !== e.target) {
    e.target.className = "chosen";

    for (let child of numbers.children) {
      if (child !== e.target) {
        child.classList.remove("chosen");
        child.classList.add("hover");
      }
    }
  }

  result.textContent = e.target.textContent;
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
