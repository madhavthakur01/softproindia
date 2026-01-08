const cards = document.querySelectorAll('.card');
const indicator = document.querySelector('.hover-indicator');
const backgrounds = document.querySelectorAll('.bg');
const cardsWrap = document.querySelector('.cards');

let activeIndex = 0;
let rafId = null;

/* move overlay safely */
function moveIndicator(index) {
  const cardWidth = cards[0].getBoundingClientRect().width;
  const x = cardWidth * index;

  // 🔥 cancel previous frame
  if (rafId) cancelAnimationFrame(rafId);

  // 🔥 force transition reset
  indicator.style.transition = 'none';
  indicator.style.transform = `translate3d(${x}px,0,0)`;

  // 🔥 next frame → animate
  rafId = requestAnimationFrame(() => {
    indicator.style.transition =
      'transform 0.45s cubic-bezier(.4,0,.2,1)';
    indicator.style.transform = `translate3d(${x}px,0,0)`;
  });

  activeIndex = index;
}

/* hover logic */
cards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    moveIndicator(index);

    // bg change
    const bgId = card.dataset.bg;
    backgrounds.forEach(bg => bg.classList.remove('active'));
    document.querySelector('.bg-' + bgId).classList.add('active');
  });
});

/* resize safety */
window.addEventListener('resize', () => {
  moveIndicator(activeIndex);
});
  