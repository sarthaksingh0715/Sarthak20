document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', e => {
 e.preventDefault();
 const name = document.getElementById('name').value.trim();
 const email = document.getElementById('email').value.trim();
 const message = document.getElementById('message').value.trim();
 const output = document.getElementById('formMessage');
 if (!name || !email.includes('@') || !message) { output.textContent = 'Please complete all fields with a valid email.'; return; }
 output.textContent = `Thanks, ${name}! Your message is ready. (Demo form: no email was sent.)`;
 e.target.reset();
});