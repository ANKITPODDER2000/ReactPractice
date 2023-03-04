'use strict';

let modalBtn = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let overlayCloseBtn = document.querySelector('.close-modal');

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let modal of modalBtn) {
  modal.addEventListener('click', showModal);
}
overlayCloseBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', e => {
  if (e.key.toLocaleLowerCase() === 'escape') {
    if (!modal.classList.contains('hidden')) hideModal();
  }
});
