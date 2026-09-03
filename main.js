const imageCards = document.querySelectorAll(".image-card");

imageCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isActive = card.classList.contains("is-active");

    imageCards.forEach((item) => {
      item.classList.remove("is-active");
    });

    if (!isActive) {
      card.classList.add("is-active");
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".image-card")) {
    imageCards.forEach((item) => {
      item.classList.remove("is-active");
    });
  }
});