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

// const result = [];
// const res = ['Nome:', 'Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'observações:'];

// const fullName = `${getName} ${getLastName}`;
const getEmail = document.getElementById('input-email');
const form = document.querySelector('#evaluation-form');
const getName = document.getElementById('input-name');
const getLastName = document.getElementById('input-lastname');

const createName = () => {
  const newName = document.createElement('p');
  newName.innerText = `Nome: ${getName.value} ${getLastName.value}`;
  form.appendChild(newName);
};

const createEmail = () => {
  const newEmail = document.createElement('p');
  newEmail.innerText = `Email: ${getEmail.value}`;
  form.appendChild(newEmail);
};

const createCasaEscolhida = () => {
  const getHouse = document.getElementById('house');
  const house = getHouse.children[getHouse.selectedIndex].text;
  const newCasa = document.createElement('p');
  newCasa.innerText = `Casa: ${house}`;
  form.appendChild(newCasa);
};

const createFamilia = () => {
  const familyValue = document.querySelector('input[name="family"]:checked').value;
  const newFamily = document.createElement('p');
  newFamily.innerText = `Família: ${familyValue}`;
  form.appendChild(newFamily);
};

const createMaterias = () => {
  const discipline = document.querySelectorAll('input[name="discipline"]:checked');
  const newDisciplina = document.createElement('p');
  const arrayDeDisciplinas = [];
  discipline.forEach((element) => {
    arrayDeDisciplinas.push(element.value);
  });
  newDisciplina.innerText = `Matérias: ${arrayDeDisciplinas.join(', ')}`;
  form.appendChild(newDisciplina);
};

const createNotaDeAvaliacao = () => {
  const nota = document.querySelector('input[name="rate"]:checked');
  const newNota = document.createElement('p');
  newNota.innerText = `Avaliação: ${nota.value}`;
  form.appendChild(newNota);
};

const createObservacoes = () => {
  const newObservacoes = document.createElement('p');
  newObservacoes.innerText = `Observações: ${textArea.value}`;
  form.appendChild(newObservacoes);
};

submitForm.addEventListener('click', () => {
  createName();
  createEmail();
  createCasaEscolhida();
  createFamilia();
  createMaterias();
  createNotaDeAvaliacao();
  createObservacoes();
});

// result.push(fullName);
// result.push(getEmail);
// result.push(house);
// });

// submitForm.addEventListener('click', () => {
//   const getFam = document.querySelectorAll('.family');
//   let fam;

//   for (let i = 0; i < getFam.length; i += 1) {
//     if (getFam[i].checked) {
//       fam = getFam[i].value;
//     }
//   }

//   result.push(fam);
// });

// submitForm.addEventListener('click', () => {
//   const sub = document.querySelectorAll('.subject');
//   let subs = '';

//   for (let i = 0; i < sub.length; i += 1) {
//     if (sub[i].checked) {
//       subs += `${sub[i].value} `;
//     }
//   }

//   result.push(subs);
// });

// submitForm.addEventListener('click', () => {
//   const rate = document.querySelectorAll('.rate');
//   let not;

//   for (let i = 0; i < rate.length; i += 1) { if (rate[i].checked) { not = rate[i].value; } }

//   result.push(not);
// });

// submitForm.addEventListener('click', () => {
//   const textarea = document.getElementById('textarea').value;

//   result.push(textarea);
// });

// submitForm.addEventListener('click', () => {
//   const form = document.getElementById('evaluation-form');
//   form.innerHTML = '';
// });

// submitForm.addEventListener('click', () => {
//   const form = document.getElementById('evaluation-form');
//   const div = document.createElement('div');
//   div.className = 'container-result';

//   form.appendChild(div);
// });

// submitForm.addEventListener('click', () => {
//   const divContainer = document.querySelector('.container-result');

//   for (let i = 0; i < result.length; i += '') {
//     const p = document.createElement('p');
//     p.innerHTML = `${res[i]} ${result[i]}`;

//     divContainer.appendChild(p);
//   }
// });
