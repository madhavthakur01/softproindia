
const techCards = document.querySelectorAll(".tech-card");

techCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      activate(card);
    }
  });

  card.addEventListener("click", () => {
    activate(card);
  });
});

function activate(card) {
  techCards.forEach(c => c.classList.remove("active"));
  card.classList.add("active");
}
