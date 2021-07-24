const docs = document.getElementById('docs');
const close = document.getElementById('close');
const on = document.getElementById('on');

// Docs navigation
docs.addEventListener('click', () =>
  document.body.classList.toggle('show-docs')
);
