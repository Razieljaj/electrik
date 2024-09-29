document.addEventListener('DOMContentLoaded', function() {
    const switchElement = document.getElementById('switch');

    switchElement.addEventListener('click', function() {
        switchElement.classList.toggle('on');
        switchElement.classList.toggle('off');
    });
});
