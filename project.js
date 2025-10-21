const button = document.getElementById('colorButton');

if (button) {
  button.addEventListener('click', () => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === 'lightyellow' ? '#f4f4f9' : 'lightyellow';
  });
}