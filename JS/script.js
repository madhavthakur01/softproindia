AOS.init({ duration: 800, once: true });
//type writter js part
const app = document.getElementById("typewriter");

new Typewriter(app, {
    loop: true,
    delay: 60,
    deleteSpeed: 30,
    cursor: "|"
})
    .typeString("IT SOLUTIONS")
    .pauseFor(1200)
    .deleteAll()
    .typeString("PROFESSIONAL TRAINING")
    .pauseFor(1200)
    .deleteAll()
    .typeString("INDUSTRY-READY TALENT")
    .pauseFor(1200)
    .start();

document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const navWrapper = document.querySelector('.nav-wrapper');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        // Agar mobile menu khula hai toh hide mat karo
        const isMobileMenuOpen = navbarCollapse.classList.contains('show');

        if (currentScrollY > 100 && !isMobileMenuOpen) {
            if (currentScrollY > lastScrollY) {
                // Scroll Down
                navWrapper.classList.add("nav-hidden");
                navWrapper.classList.remove("nav-visible");
            } else {
                // Scroll Up
                navWrapper.classList.add("nav-visible");
                navWrapper.classList.remove("nav-hidden");
            }
        } else {
            // At Top
            navWrapper.classList.remove("nav-hidden");
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
});
const swiperEl = document.querySelector(".mySwiper");

swiperEl.addEventListener("mouseenter", () => {
    swiperEl.swiper.autoplay.stop();   // ⏸ pause on hover
});

swiperEl.addEventListener("mouseleave", () => {
    swiperEl.swiper.autoplay.start();  // ▶ resume
});
const cards = document.querySelectorAll('.card-item');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

const container = document.querySelector('.expanding-cards');
container.addEventListener('mouseleave', () => {
    cards.forEach(c => c.classList.remove('active'));
});


// happy clients section 
const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.innerText.replace(/\D/g,'');
    let count = 0;
    const inc = target / 80;

    const run = () => {
      count += inc;
      if (count < target) {
        counter.innerText = Math.ceil(count) + "+";
        requestAnimationFrame(run);
      } else {
        counter.innerText = target + "+";
      }
    };
    run();
  };
  update();
});
document.querySelectorAll('.card-item').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(link => {
  if (window.innerWidth < 992) {
    link.removeAttribute('data-bs-toggle');
  }
});
