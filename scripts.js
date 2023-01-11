const cardsArray = [
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
]

cardsArray.sort(() => 0.5 - Math.random())
console.log(cardsArray);

const gridDisplay = document.getElementById("grid")
const resultDisplay = document.getElementById("result")
const cardsMatch = []
let cardSelected = []
let cardSelectedIds = []


function createBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("img")
    card.setAttribute("src", "images/default.png")
    card.setAttribute("data-id", i)
    card.addEventListener("click", flipCard)
    gridDisplay.append(card)
    // card.classList = "classeCriada" criando uma classe
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id")
  cardSelected.push(cardsArray[cardId].name)
  cardSelectedIds.push(cardId)
  this.setAttribute("src", cardsArray[cardId].img)

  console.log(cardSelected, cardSelectedIds);

  if (cardSelected.length == 2) {
    setTimeout(checkMatch, 200)
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img")

  if (cardSelected[0] == cardSelected[1]) {
    cards[cardSelectedIds[0]].setAttribute("src", "images/white.png")
    cards[cardSelectedIds[1]].setAttribute("src", "images/white.png")
    cards[cardSelectedIds[0]].removeEventListener("click", flipCard)
    cards[cardSelectedIds[1]].removeEventListener("click", flipCard)
    cardsMatch.push(cardSelected)
    console.log(cardsMatch);
    if (cardsMatch.length == cardsArray.length / 2) {
      alert('You win, Perfect !')
    }
  }
  else {
    cards[cardSelectedIds[0]].setAttribute("src", "images/default.png")
    cards[cardSelectedIds[1]].setAttribute("src", "images/default.png")
  }
  resultDisplay.textContent = cardsMatch.length
  cardSelected = []
  cardSelectedIds = []
  // if (cards[cardSelectedIds[0]] == cards[cardSelectedIds[1]]) {

  // }
}

createBoard()

// console.log(cardsArray);