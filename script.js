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

submitForm.addEventListener('click', (event) => {
  event.preventDefault();
});

const result = [];
const res = ['Nome:', 'Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'observações:'];

submitForm.addEventListener('click', () => {
  const getName = document.getElementById('input-name').value;
  const getLastName = document.getElementById('input-lastname').value;
  const fullName = `${getName} ${getLastName}`;
  const getEmail = document.getElementById('input-email').value;
  const getHouse = document.getElementById('house');
  const house = getHouse.children[getHouse.selectedIndex].text;

  result.push(fullName);
  result.push(getEmail);
  result.push(house);
});

submitForm.addEventListener('click', () => {
  const getFam = document.querySelectorAll('.family');
  let fam;

  for (let i = 0; i < getFam.length; i += 1) {
    if (getFam[i].checked) {
      fam = getFam[i].value;
    }
  }

  result.push(fam);
});

submitForm.addEventListener('click', () => {
  const sub = document.querySelectorAll('.subject');
  let subs = '';

  for (let i = 0; i < sub.length; i += 1) {
    if (sub[i].checked) {
      subs += `${sub[i].value} `;
    }
  }

  result.push(subs);
});

submitForm.addEventListener('click', () => {
  const rate = document.querySelectorAll('.rate');
  let not;

  for (let i = 0; i < rate.length; i += 1) { if (rate[i].checked) { not = rate[i].value; } }

  result.push(not);
});

submitForm.addEventListener('click', () => {
  const textarea = document.getElementById('textarea').value;

  result.push(textarea);
});

submitForm.addEventListener('click', () => {
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
});

submitForm.addEventListener('click', () => {
  const form = document.getElementById('evaluation-form');
  const div = document.createElement('div');
  div.className = 'container-result';

  form.appendChild(div);
});

submitForm.addEventListener('click', () => {
  const divContainer = document.querySelector('.container-result');

  for (let i = 0; i < result.length; i += '') {
    const p = document.createElement('p');
    p.innerHTML = `${res[i]} ${result[i]}`;

    divContainer.appendChild(p);
  }
});
