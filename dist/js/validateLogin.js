// Form Validation Login Page
let form = document.getElementById("loginForm");
let email = document.getElementById("loginEmail");
let pass = document.getElementById("loginPass");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  checkPass();

  email.addEventListener("keyup", checkEmail);
  pass.addEventListener("keyup", checkPass);
  if (
    !email.parentElement.classList.contains("error") &&
    !pass.parentElement.classList.contains("error")
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
