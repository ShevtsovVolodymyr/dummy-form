const inputElements = [
  document.getElementById('firstName'),
  document.getElementById('lastName'),
  document.getElementById('emailAddress'),
  document.getElementById('password'),
];

const elForm = document.getElementById('registerForm');

function validatePresence(value) {
  return !!value.trim();
}
function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = emailRegex.test(email);
  return isValid;
}
function addError(element) {
  element.classList.add('has-error');
}
function removeError(element) {
  element.classList.remove('has-error');
}
function validateForm(inputs) {
  let isValidForm = true;
  let isValidInput;

  inputs.forEach(input => {
    if (input.type === 'text' || input.type === 'password') {
      isValidInput = validatePresence(input.value);
    } else if (input.type === 'email') {
      isValidInput = validateEmail(input.value);
    }
    if (!isValidInput) {
      isValidForm = false;
      addError(input.parentElement);
    }
  });
  return isValidForm;
}
function submitForm(event) {
  event.preventDefault();
  const isValid = validateForm(inputElements);
  if (!isValid) return;
  tsParticles.load('tsparticles', {
    preset: 'confetti',
  });
}

elForm.addEventListener('submit', submitForm);
inputElements.forEach(input => {
  input.addEventListener('focus', () => {
    removeError(input.parentElement);
  });
});
