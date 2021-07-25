const container = document.querySelector('.container');
const docs = document.getElementById('docs');
const close = document.getElementById('close');
const on = document.getElementById('on');
const box = document.querySelectorAll('.box');

// Docs navigation
docs.addEventListener('click', () =>
  document.body.classList.toggle('show-docs')
);

// Total boxes selected
function boxesSelected() {
  const selectedBoxes = document.querySelectorAll('.box.selected');

  const boxIndex = [...selectedBoxes].map((b) => [...box].indexOf(b));

  localStorage.setItem('selectedBoxes', JSON.stringify(boxIndex));
}

// Box selection
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    e.target.classList.toggle('selected');
  }

  boxesSelected();
})

