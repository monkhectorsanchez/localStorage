const container = document.querySelector('.container');
const docs = document.getElementById('docs');
const close = document.getElementById('close');
const on = document.getElementById('on');
const box = document.querySelectorAll('.box');

populateUI();

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

// Get data from local storage and populate UI
function populateUI() {
  const selectedBoxes = JSON.parse(localStorage.getItem('selectedBoxes'));

  if (selectedBoxes !== null && selectedBoxes.length > 0) {
    box.forEach((b, index) => {
      if (selectedBoxes.indexOf(index) > -1) {
        b.classList.add('selected');
      }
    });
  }
}

// Box selection
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    e.target.classList.toggle('selected');
  }

  boxesSelected();
})

