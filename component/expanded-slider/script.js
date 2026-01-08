const cards = document.querySelectorAll('.card-item');

/* Click behavior */
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

/* Optional: reset on mouse leave (desktop only) */
const container = document.querySelector('.expanding-cards');

container.addEventListener('mouseleave', () => {
  cards.forEach(c => c.classList.remove('active'));
});
