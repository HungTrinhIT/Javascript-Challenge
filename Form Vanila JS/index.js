const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

validateInputs = () => {
  // Get all values from th inputs
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;

  //Check username:
  if (usernameValue === "") {
    // Show error
    // Add error class
    setError(username, "Username can not be plank!");
  } else {
    setSuccess(username);
  }

  //Check Email
  if (emailValue === "") {
    setError(email, "Email cannot be plank!");
  } else if (!isEmail(emailValue)) {
    setError(email, "Email is not valid!");
  } else {
    setSuccess(email);
  }

  //Check passsword
  if (passwordValue === "") {
    setError(passwordValue, "Password cannot be plank!");
  } else {
    setSuccess(password);
  }

  //Check password confirmed
  if (password2Value === "") {
    setError(password2, "Password confirmed cannot be plank!");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password does not match!");
  } else {
    setSuccess(password2);
  }
};

// Handle Error:
setError = (input, message) => {
  // Add message
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;

  //Add error class
  formControl.className = "form-control error";
};

// Handle Success:
setSuccess = (input) => {
  // Add class
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
