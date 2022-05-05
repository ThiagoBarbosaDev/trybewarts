const buttonSubmit = document.querySelector("#submit-button");
const inputPwd = document.querySelector("#pwd-input");
const inputEmail = document.querySelector("#email-input");

buttonSubmit.addEventListener("click", () => {
  if (inputEmail.value === "tryber@teste.com" && inputPwd.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

const submitForm = document.getElementById("submit-btn");
const agreement = document.getElementById("agreement");

agreement.addEventListener("change", () => {
  if (agreement.checked) {
    submitForm.disabled = false;
  } else {
    submitForm.disabled = true;
  }
});

const characterCounter = document.querySelector('#counter');
const textArea = document.querySelector('textarea');

textArea.addEventListener('input', () => {
  characterCounter.innerText = `${textArea.value.length}`;
});
