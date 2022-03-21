const cardArray = [ // Array
    {   // Objects:
        name: 'fries', 
        img: 'images/fries.png',
    },
    {   
        name: 'cheeseburger', 
        img: 'images/cheeseburger.png',
    },
    {   
        name: 'hotdog', 
        img: 'images/hotdog.png',
    },
    {   
        name: 'icecream', 
        img: 'images/ice-cream.png',
    },
    {   
        name: 'milkshake', 
        img: 'images/milkshake.png',
    },
    {   
        name: 'pizza', 
        img: 'images/pizza.png',
    },
    {   
        name: 'fries', 
        img: 'images/fries.png',
    },
    {   
        name: 'cheeseburger', 
        img: 'images/cheeseburger.png',
    },
    {   
        name: 'hotdog', 
        img: 'images/hotdog.png',
    },
    {   
        name: 'icecream', 
        img: 'images/ice-cream.png',
    },
    {   
        name: 'milkshake', 
        img: 'images/milkshake.png',
    },
    {   
        name: 'pizza', 
        img: 'images/pizza.png',
    },
]

// To sort/shuffle the array randomly (get the array, use js method of sort, to sort everything in the array randomly)
// The sort method compares two values and math random returns back a nr thats either smaller or larger than 0.5, the first value oh its smaller/bigger than...
cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid') // The board. Id from html, the method search for the id of grid, go in to a document and use queryselector to search the grid id. And I save it as const = gridDisplay. 
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () { // Function does something. 
    for (let i = 0; i < cardArray.length; i++) { // For loop syntax. Start from 0 and as long as i is smaller than than 10 it increaments by 1. Counts from 0-9 (10 steps) and the stops. Want something to happens 10 times. 
        const card = document.createElement('img') // CreateElement is a js method, creates images. Saved as a card. 
        card.setAttribute('src', 'images/blank.png') // Adds src to img tag
        card.setAttribute('data-id', i) // Adds data-id to the img tag
        card.addEventListener('click', flipCard) // Listens for a click and will then flip card
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    if (optionOneId == optionTwoId) { // If clicking the same img
        cards[optionOneId].setAttribute('src', 'images/blank.png') 
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }

    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) { // If the two cards match
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png') // If match -> cards white
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard) // Remove eventlistener to stop listen after clicks (remove the ability to click on card)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else { // If not a match, want them to flip back to blank alert is shown
        cards[optionOneId].setAttribute('src', 'images/blank.png') 
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen =[] // Make cardsChosen array empty and start process again
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

//Function that allows to flip the card when clicking
function flipCard() {
    const cardId = this.getAttribute('data-id') // This keyword let me use whatever element is clicked and get the data-id and saves it as cardId.
    cardsChosen.push(cardArray[cardId].name) 
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}