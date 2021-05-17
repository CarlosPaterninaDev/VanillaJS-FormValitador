const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email invalid");
  }
}

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;
}

function checkPassword(password, password2) {
  if (password2.value !== password.value) {
    showError(password2, "Passwords do not match ");
  }
}

function checkForm(inputArray) {

  const validate = inputArray.map( input => input.parentElement.classList[1])
  if(validate.some(element => element === 'error')){
    console.log('Upss');

  }else{
    console.log('%c Congratulations!!', 'background: #222; color: #2ecc71');
    console.log('%c LVL 1 Completed!' , 'background: #222; color: yellow');
    console.log('%c Course Udemy: 20 Web Projects With Vanilla JavaScript', 'background: #222; color: #ec5252');
    console.log('%c Author: Brad Traversy', 'background: #222; color: #ec5252');
    console.log('%c Dev. @iCarlyCode', 'background: #222; color: cyan');

    
  }
  
}

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

form.addEventListener("submit", (element) => {
  element.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 20);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPassword(password, password2);
  checkForm([username, email, password, password2])

});
