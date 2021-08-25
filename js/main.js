const root = document.documentElement;
const containerCardsElement = document.querySelector('.cards-container');
const printBtn = document.getElementById('print-btn');
const numberOfCards = document.getElementById('numbers-of-cards');
const sortBtn = document.getElementById('sort-btn');
const logSort = document.getElementById('sort-log');

// Array of Cards
let arrayCards = [];

// Listeners
numberOfCards.addEventListener('change', resetArrayCards);
printBtn.addEventListener('click', generateCards);
sortBtn.addEventListener('click', bubbleSortCards);


// functions

function generateCards() {
    resetArrayCards();
    if (numberOfCards.value < 1) {
        numberOfCards.value = "";
    } else if (numberOfCards.value > 30) {
        numberOfCards.value = 30;
    }
    for (let i = 0 ; i < numberOfCards.value; i ++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        const [pinta, content, value, valuePinta] = randomElements();
        cardElement.innerHTML = content;
        cardElement.classList.add(pinta);
        
        arrayCards.push({ cardElement, value, valuePinta});
    }
    printCards();
}

function printCards() {
    containerCardsElement.innerHTML = "";
    arrayCards.forEach((cardObj) => {
        containerCardsElement.appendChild(cardObj.cardElement);
    });
}

function resetArrayCards() {
    arrayCards = [];
}

function randomElements() {
    const arrayValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const arrayPinta = [ 'clubs', 'spades', 'diamonds', 'hearts'];
    
    const randomPinta = arrayPinta[Math.floor(Math.random() * arrayPinta.length)]
    const randomValue = arrayValue[Math.floor(Math.random() * arrayValue.length)];
    const valueCard = arrayValue.indexOf(randomValue);
    const valuePinta = arrayPinta.indexOf(randomPinta);
    return [randomPinta, randomValue, valueCard, valuePinta];
}

function bubbleSortCards() {
    logSort.innerHTML = "";
    let wall = arrayCards.length;
    let counter = 0;
    while (1 < wall) {
        let i = 1;
        while (i < wall) {
            if (arrayCards[i].value < arrayCards[i - 1].value) {
                let aux = arrayCards[i];
                arrayCards[i] = arrayCards[i - 1];
                arrayCards[i - 1] = aux;
                printSortedStep(counter);
                counter++;
            } else if (arrayCards[i].value === arrayCards[i - 1].value ) {
                if (arrayCards[i].valuePinta < arrayCards[i - 1].valuePinta) {
                    let aux = arrayCards[i];
                    arrayCards[i] = arrayCards[i - 1];
                    arrayCards[i - 1] = aux;
                    printSortedStep(counter);
                    counter++;
                }
            }
            i++;
        }
        wall--;
    }
};

function printSortedStep(paso) {
    const newArray = arrayCards.map(objCard => {
        const cloneCard = objCard.cardElement.cloneNode(true);
        return cloneCard;
    });
    // console.log(newArray);
    const sortStep = document.createElement('div');
    sortStep.classList.add('flex-log');
    const titleSort = document.createTextNode(`${paso}`);
    sortStep.appendChild(titleSort);
    newArray.forEach((card) => {
        sortStep.appendChild(card);
    });
    logSort.appendChild(sortStep);
}