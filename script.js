const emailInputEl = document.getElementById("email");
const passwordInputEL = document.getElementById("password");
const loginFormEl = document.getElementById("form-login");
const registrationForm = document.getElementById("form-registration");
const successPage = document.getElementById("success");
const genderSelectEl = document.getElementById("select")

console.log(genderSelectEl)

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

  if(!emailInputEl.value && !passwordInputEL.value) return;

  if (
    typeof emailInputEl.value === "string" &&
    typeof FAKE_USER.password === "string"
  ) {
    hidePage(loginFormEl);
    showPage(registrationForm);
  }
});

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // if(!genderSelectEl.value) return
 console.log(genderSelectEl.value);

  hidePage(registrationForm);
  showPage(successPage);


});


