const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const placeholder = 'Search...';
btn.addEventListener('click', () => {
  if (!input.classList.contains('input-show')) {
    input.placeholder = placeholder;
  } else {
    input.placeholder = '';
  }
  input.classList.toggle('input-show');
});
