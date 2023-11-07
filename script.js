const emailInputEl = document.getElementById("email");
const passwordInputEL = document.getElementById("password");
const loginFormEl = document.getElementById("form-login");
const registrationForm = document.getElementById("form-registration");
const successPage = document.getElementById("success");
const passwordInputEl = document.getElementById("password");

const FAKE_USER = {
  email: "example@gmail.com",
  password: "password",
};

function hidePage(page) {
  return page.classList.add("hidden");
}

function showPage(page) {
  return page.classList.remove("hidden");
}

loginFormEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!emailInputEl.value && !passwordInputEL.value) return;

  if (emailInputEl.value.length > 5) {
    if (passwordInputEl.value.length > 6) {
      hidePage(loginFormEl);
      showPage(registrationForm);
    }else{
      alert("Try a stronger password🙃");
      emailInputEl.value = "";
      passwordInputEL.value = "";
    }
  }
});

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  hidePage(registrationForm);
  showPage(successPage);
});
