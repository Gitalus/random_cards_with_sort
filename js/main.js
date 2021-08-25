const root = document.documentElement;
const containerCardsElement = document.querySelector('.cards-container');
const randomBtn = document.getElementById('random-btn');
const printBtn = document.getElementById('print-btn');
const numberOfCards = document.getElementById('numbers-of-cards');

// Array of Cards
let arrayCards = [];

// Listeners
randomBtn.addEventListener('click', generateCards);
printBtn.addEventListener('click', printCards);

// functions
function generateCards() {
    if (numberOfCards.value < 1) {
        numberOfCards.value = "";
    } else if (numberOfCards.value > 54) {
        numberOfCards.value = 54;
    }
    for (let i = 0 ; i < numberOfCards.value; i ++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        const [pinta, value] = randomElements();
        cardElement.innerHTML = value;
        const initialCLass = cardElement.classList[1];
        if (!initialCLass) {
            cardElement.classList.add(pinta);
        } else {
            cardElement.classList.replace(initialCLass, pinta);
        }
        arrayCards.push(cardElement);
    }
}

function printCards() {
    arrayCards.forEach((card) => {
        containerCardsElement.appendChild(card);
    });
}

function randomElements() {
    const arrayValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const arrayPinta = ['diamonds', 'hearts', 'spades', 'clubs'];
    
    const randomPinta = arrayPinta[Math.floor(Math.random() * arrayPinta.length)]
    const randomValue = arrayValue[Math.floor(Math.random() * arrayValue.length)];
    return [randomPinta, randomValue];
}
