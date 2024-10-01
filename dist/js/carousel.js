const cardContainer = [...document.querySelectorAll(".carousel")];

const btnNext = [...document.querySelectorAll(".carousel-button-right")];
const btnPrev = [...document.querySelectorAll(".carousel-button-left")];

cardContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  btnNext[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
    btnNext[i].classList.add("hidden");
    btnPrev[i].classList.remove("hidden");
  });

  btnPrev[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
    btnPrev[i].classList.add("hidden");
    btnNext[i].classList.remove("hidden");
  });
});
