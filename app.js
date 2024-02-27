const hiddenElements = document.querySelectorAll('.hidden, .hiddenLogos, .hiddenText');

window.addEventListener('load', function () {
    hiddenElements.forEach((entry) => {
        entry.classList.add('show');
    });
})