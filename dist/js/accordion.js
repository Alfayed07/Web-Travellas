const accordionContent = document.querySelectorAll(".faq-content");

accordionContent.forEach((item, index) => {
  let headerFaq = item.querySelector(".header");
  headerFaq.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".faq-desc");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      item
        .querySelector("i")
        .classList.replace("fa-circle-chevron-down", "fa-circle-chevron-up");
    } else {
      description.style.height = "0px";
      item
        .querySelector("i")
        .classList.replace("fa-circle-chevron-up", "fa-circle-chevron-down");
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let desc = item2.querySelector(".faq-desc");
      desc.style.height = "0px";
      item2
        .querySelector("i")
        .classList.replace("fa-circle-chevron-up", "fa-circle-chevron-down");
    }
  });
}
