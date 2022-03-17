const form = document.querySelector("#post");

const name = document.querySelector("#usersName");

const nameError = document.querySelector("#nameError");

const phone = document.querySelector("#phone");

const phoneError = document.querySelector("#phoneError");

const order = document.querySelector("#order");

const orderError = document.querySelector("#orderError");

const email = document.querySelector("#email");

const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");

const messageError = document.querySelector("#messageError");


function validateForm(event) {
  event.preventDefault();

  if (checkLength(usersName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(phone.value, 7) === true) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }

  if (checkLength(order.value, 10) === true) {
    orderError.style.display = "none";
  } else {
    orderError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 0) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
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
