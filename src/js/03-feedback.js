const throttle = require('lodash.throttle');

const formEll = document.querySelector('.feedback-form');
const emailEll = formEll.querySelector('input');
const messageEll = formEll.querySelector('textarea');
let formData = {};

formEll.addEventListener('input', throttle(onTextareaInput, 500));
formEll.addEventListener('submit', onFormSubmit);

populareTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  const saveData = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(saveData));
  localStorage.removeItem('feedback-form-state');
  formData = {};
}

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populareTextarea() {
  const saveMessage = localStorage.getItem('feedback-form-state');
  if (saveMessage) {
    const saveData = JSON.parse(saveMessage);
    if (saveData.email) {
      emailEll.value = saveData.email;
    }
    if (saveData.message) {
      messageEll.value = saveData.message;
    }
  }
}
