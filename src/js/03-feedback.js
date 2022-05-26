const throttle = require('lodash.throttle');

const formEll = document.querySelector('.feedback-form');

let formData = {};

const LOCALSTORAGE_K = 'feedback-form-state';

formEll.addEventListener('input', throttle(onFormInput, 500));
formEll.addEventListener('submit', onFormSubmit);

populareTextarea();

function onFormInput() {
  localStorage.setItem(LOCALSTORAGE_K, JSON.stringify(statusObject()));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(statusObject());
  formEll.reset();
  localStorage.removeItem(LOCALSTORAGE_K);
}

function statusObject() {
  return {
    email: formEll.elements.email.value,
    message: formEll.elements.message.value,
  };
}

function populareTextarea() {
  let currentFieldStatus;
  try {
    currentFieldStatus = JSON.parse(localStorage.getItem(LOCALSTORAGE_K));
    formEll.elements.email.value = currentFieldStatus.email;
    formEll.elements.message.value = currentFieldStatus.message;
  } catch (error) {}
}
