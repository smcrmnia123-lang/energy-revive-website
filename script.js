const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.15});
revealEls.forEach(el => io.observe(el));

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('form-status').textContent =
        'Thank you! We received your message and will contact you shortly.';
      form.reset();
    });
  }
});