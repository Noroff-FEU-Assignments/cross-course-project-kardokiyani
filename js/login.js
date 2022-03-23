const form = document.querySelector("#login-form");

const email = document.querySelector("#usersMail");

const emailError = document.querySelector("#emailError");

const password = document.querySelector("#usersPassword");

const passwordError = document.querySelector("#passwordError");

function validateForm(event) {
  event.preventDefault();

  if (validateEmail(usersMail.value,0) === true) {
    emailError.style.display = "none";
  }else {
    emailError.style.display = "flex";
  }

  if (checkLength(usersPassword.value,9) === true) {
    passwordError.style.display = "none";
  }else {
    passwordError.style.display = "flex";
  }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}