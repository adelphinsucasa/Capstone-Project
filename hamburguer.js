const btnClose = document.querySelector('#btn-close');
const divHamburguer = document.querySelector('.hamburguer');
const iconHamburguer = document.querySelector('#hamburguer-icon');
const hamburguerLink = document.querySelectorAll('.hamburguer-link');

btnClose.addEventListener('click', () => {
  divHamburguer.classList.add('run-out');
  divHamburguer.classList.remove('run');
});

iconHamburguer.addEventListener('click', () => {
  divHamburguer.classList.add('run');
  divHamburguer.classList.remove('run-out');
});

for (let i = 0; i < hamburguerLink.length; i += 1) {
  hamburguerLink[i].addEventListener('click', () => {
    divHamburguer.classList.add('run-out');
    divHamburguer.classList.remove('run');
  });
}
