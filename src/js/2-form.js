const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
populateText();

function updateFormData() {
  formData.email = email.value;
  formData.message = textarea.value;
}

form.addEventListener('input', event => {
  const key = event.target.name;
  formData[key] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

function populateText() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (!data) {
    return;
  }

  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = form.elements;

  if (!email.value || !message.value) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
//