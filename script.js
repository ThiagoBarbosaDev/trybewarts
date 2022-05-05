const buttonSubmit = document.querySelector('#submit-button');

const inputPwd = document.querySelector('#pwd-input');
const inputEmail = document.querySelector('#email-input');

buttonSubmit.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPwd.value == '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
