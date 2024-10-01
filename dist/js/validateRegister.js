// Form Validation Login Page
let form = document.getElementById("regForm");
let username = document.getElementById("regUsername");
let email = document.getElementById("regEmail");
let pass = document.getElementById("regPass");
let passConfirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUsername();
  checkEmail();
  checkPass();
  checkConfirm();

  username.addEventListener("keyup", checkUsername);
  email.addEventListener("keyup", checkEmail);
  pass.addEventListener("keyup", checkPass);
  passConfirm.addEventListener("keyup", checkConfirm);
  if (
    !username.parentElement.classList.contains("error") &&
    !email.parentElement.classList.contains("error") &&
    !pass.parentElement.classList.contains("error") &&
    !passConfirm.parentElement.classList.contains("error")
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
  let usernameValue = username.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function checkEmail() {
  let emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
}

function checkPass() {
  let passValue = pass.value.trim();

  if (passValue === "") {
    setError(pass, "Password is required");
  } else if (passValue.length < 8) {
    setError(pass, "Password must be at least 8 character.");
  } else {
    setSuccess(pass);
  }
}

function checkConfirm() {
  let passValue = pass.value.trim();
  let confirmValue = passConfirm.value.trim();

  if (confirmValue === "") {
    setError(passConfirm, "Please confirm your Password");
  } else if (confirmValue !== passValue) {
    setError(passConfirm, "Password doesn't match");
  } else {
    setSuccess(passConfirm);
  }
}
