document.getElementById('registrationForm').addEventListener('submit', e => {
 e.preventDefault();
 const password = document.getElementById('password').value;
 const confirm = document.getElementById('confirmPassword').value;
 const result = document.getElementById('result');
 if (password !== confirm) { result.textContent = 'Passwords do not match.'; return; }
 if (!/^[0-9]{10}$/.test(document.getElementById('mobile').value)) { result.textContent = 'Enter a valid 10-digit mobile number.'; return; }
 result.textContent = 'Registration successful! (Demo only; details were not stored.)';
 e.target.reset();
});