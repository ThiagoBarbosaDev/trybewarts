const buttonSubmit = document.querySelector('#submit-button');
const inputPwd = document.querySelector('#pwd-input');
const inputEmail = document.querySelector('#email-input');

buttonSubmit.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPwd.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitForm = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    submitForm.disabled = false;
  } else {
    submitForm.disabled = true;
  }
});

const characterCounter = document.querySelector('#counter');
const textArea = document.querySelector('textarea');

textArea.addEventListener('input', () => {
  characterCounter.innerText = `${500 - textArea.value.length}`;
});

function get() {
  const getName = document.getElementById('input-name');
  const getLastName = document.getElementById('input-lastname');
  const getEmail = document.getElementById('input-email');
  const getHouse = document.getElementById('house');
  const getFamily = document.querySelector('radio-family');

  const fullName = getName + getLastName;
  const house = getHouse.options[getHouse.selectedIndex].text;
  let family;

  for (let i = 0; i < getFamily.length; i += 1) {
    if (getFamily[i].checked) {
      family = getFamily[i].value;
    }
  }

  const array = [fullName, getEmail, house, family];
  return array;
}

submitForm.addEventListener('click', () => {
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
  const res = ['Nome:', 'Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'observações:'];
  const array = get();

  for (let i = 0; i < res.length; i += 1) {
    const p = document.createElement('p');
    p.className = 'result';
    p.innerHTML = res[i] + array[i];

    form.appendChild(p);
  }
});
