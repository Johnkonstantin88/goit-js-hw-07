const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const userEmail = form.elements.email.value.trim();
  const userPassword = form.elements.password.value.trim();
  const user = {};

  if (userEmail === "" || userPassword === "") {
    return alert("All form fields must be filled in");
  }

  user.email = userEmail;
  user.password = userPassword;
  console.log(user);
  form.reset();
}
