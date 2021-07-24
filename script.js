const container = document.querySelector('.container');
const docs = document.getElementById('docs');
const close = document.getElementById('close');
const on = document.getElementById('on');
const box = document.querySelectorAll('.box');
const selectedBoxes = document.querySelectorAll('.box.selected');

// Docs navigation
docs.addEventListener('click', () =>
  document.body.classList.toggle('show-docs')
);

// Box selection
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    e.target.classList.toggle('selected');
  }
})
