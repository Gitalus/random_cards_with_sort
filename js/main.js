const root = document.documentElement;
window.onload = function() {
    const randomBtn = document.getElementById('random-btn');
    const customInput = document.querySelectorAll('input');

    generateCard();

    randomBtn.addEventListener('click', generateCard);

}

function generateCard() {
    const cardElement = document.querySelector('.card');
    const [pinta, numero] = randomElements();
    cardElement.innerHTML = numero;
    const initialCLass = cardElement.classList[1];
    if (!initialCLass) {
        cardElement.classList.add(pinta);
    } else {
        cardElement.classList.replace(initialCLass, pinta);
    }
}

function randomElements() {
    const arrayValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const arrayPinta = ['diamonds', 'hearts', 'spades', 'clubs'];
    
    const randomPinta = arrayPinta[Math.floor(Math.random() * arrayPinta.length)]
    const randomValue = arrayValue[Math.floor(Math.random() * arrayValue.length)];
    return [randomPinta, randomValue];
}
