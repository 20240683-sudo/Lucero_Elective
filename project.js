const button = document.getElementById('colorButton');

button.addEventListener('click', function() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'lightyellow' ? '#f4f4f9' : 'lightyellow';
});