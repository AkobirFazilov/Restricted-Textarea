let tArea = document.querySelector(".tArea");
let countOfLetters = document.querySelector(".countOfLetters");

tArea.addEventListener(
  "keyup",
  () => {
    countOfLetters.innerHTML = tArea.value.length + " / " + "250";
    if (tArea.value.length >= 250) {
      tArea.classList.add("tAreaRed");
    } else {
      tArea.classList.remove("tAreaRed");
    }
  },
  false
);
