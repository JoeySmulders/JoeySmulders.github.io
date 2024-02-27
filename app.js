const hiddenElements = document.querySelectorAll('.hidden, .hiddenLogos, .hiddenText');

hiddenElements.forEach((entry) => {
    entry.classList.add('show');
});