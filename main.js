function changeColor(element) {
        if (element.style && element.style.backgroundColor) {
                element.style.backgroundColor = '';
                element.style.color = '';
        } else {
                element.style.backgroundColor = '#30A64A';
                element.style.color = 'white';
        }
}

document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
                changeColor(card);
        });
});

const reloadControl = document.getElementById('reload-button');
if (reloadControl) {
        reloadControl.addEventListener('click', () => {
                window.location.reload();
        });
}
