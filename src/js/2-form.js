const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

function updateFormData() {
  formData.email = email.value;
  formData.message = textarea.value;
}

form.addEventListener('input', event => {
  const key = event.target.name;
  formData[key] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

function populateText() {
  const data = JSON.parse(localStorage.getItem(localStorageKey));

  if (!data) {
    return;
  }

  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}

populateText();

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!email.value || !textarea.value) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formData.email = '';
  formData.message = '';
  localStorage.removeItem(localStorageKey);
  form.reset();
});
