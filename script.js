const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.15});
revealEls.forEach(el => io.observe(el));

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  const data = {
    full_name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    inquiry_type: document.getElementById('type').value,
    program_interest: document.getElementById('program').value,
    message: document.getElementById('message').value
  };

 fetch('https://energy-revive.site.je/energyrevive-contact.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(function (response) { return response.json(); })
  .then(function (result) {
    document.getElementById('form-status').textContent = result.message;
    form.reset();
  })
  .catch(function (error) {
    document.getElementById('form-status').textContent = 'Something went wrong.';
  });
})}