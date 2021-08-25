const root = document.documentElement;
window.onload = function() {
    const randomBtn = document.getElementById('random-btn');
    const customInput = document.querySelectorAll('input');

    customInput[0].addEventListener('change', changeWidth);
    customInput[1].addEventListener('change', changeHeight);

    generateCard();

    randomBtn.addEventListener('click', generateCard);

    setInterval(generateCard, 10000);
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

function changeWidth(event) {
    if (event.target.value < 300) {
        event.target.value = "";
        root.style.setProperty('--width-variable', '300px');
    } else {
        root.style.setProperty('--width-variable', event.target.value + 'px');
    }
}

function changeHeight(event) {
    if (event.target.value < 450) {
        event.target.value = "";
        root.style.setProperty('--height-variable', '450px');
    } else {
        root.style.setProperty('--height-variable', event.target.value + 'px');
    }
}
