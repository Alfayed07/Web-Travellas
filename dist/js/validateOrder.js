// Form Validation Login Page
let form = document.getElementById("form");
let orderName = document.getElementById("orderName");
let orderEmail = document.getElementById("orderEmail");
let orderTel = document.getElementById("orderTel");
let passName = document.getElementById("passName");
let passTel = document.getElementById("passTel");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUsername();
  checkEmail();
  checkTel();
  checkPassName();
  checkPassTel();

  orderName.addEventListener("keyup", checkUsername);
  orderEmail.addEventListener("keyup", checkEmail);
  orderTel.addEventListener("keyup", checkTel);
  passName.addEventListener("keyup", checkPassName);
  passTel.addEventListener("keyup", checkPassTel);
  if (
    !orderName.parentElement.classList.contains("error") &&
    !orderEmail.parentElement.classList.contains("error") &&
    !orderTel.parentElement.classList.contains("error") &&
    !passName.parentElement.classList.contains("error") &&
    !passTel.parentElement.classList.contains("error")
  ) {
    location.href = form.getAttribute("action");
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

function checkUsername() {
  let usernameValue = orderName.value.trim();

  if (usernameValue === "") {
    setError(orderName, "Username is required");
  } else {
    setSuccess(orderName);
  }
}

const isValidEmail = (orderEmail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(orderEmail).toLowerCase());
};

function checkEmail() {
  let emailValue = orderEmail.value.trim();

  if (emailValue === "") {
    setError(orderEmail, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(orderEmail, "Provide a valid email address");
  } else {
    setSuccess(orderEmail);
  }
}

function checkTel() {
  let orderTelValue = orderTel.value.trim();

  let phoneFormat = /^\d{10}$/;

  if (orderTelValue === "") {
    setError(orderTel, "Phone Number is required");
  } else if (orderTelValue.match(phoneFormat)) {
    setError(orderTel, "Provide a valid Phone Number");
  } else if (orderTel.length < 10) {
    setError(orderTel, "Phone Number must be at least 8 character");
  } else {
    setSuccess(orderTel);
  }
}

function checkPassName() {
  let usernameValue = orderName.value.trim();
  let passNameValue = passName.value.trim();

  if (passNameValue === "") {
    setError(passName, "Username is required");
  } else if (passNameValue !== usernameValue) {
    setError(passName, "Username doesn't match");
  } else {
    setSuccess(passName);
  }
}

function checkPassTel() {
  let orderTelValue = orderTel.value.trim();
  let passTelValue = passTel.value.trim();

  if (passTelValue === "") {
    setError(passTel, "Phone Number is required");
  } else if (passTelValue !== orderTelValue) {
    setError(passTel, "Phone Number doesn't match");
  } else {
    setSuccess(passTel);
  }
}
