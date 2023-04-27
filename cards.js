let baseURL = 'https://deckofcardsapi.com/api/deck'

//Deck methods
const deck = {
    async init() {
        let res = await axios.get(`${baseURL}/new`)
        console.log(res)
    this.deckId = res.data.deck_id;
    },
    async shuffle() {
        let res = await axios.get(`${baseURL}/${this.deckId}/shuffle`)
        console.log(res)
    },
    async drawCard() {
        let res = await axios.get(`${baseURL}/${this.deckId}/draw/?count=1`)
        console.log(res.data)
        image = res.data.cards[0].image
        console.log(image)
        return image;      
    }
}

//Initialize new deck
async function newDeck() {
    await deck.init();
    await deck.shuffle();
}

newDeck();

//Draw Cards

let getCardButton = document.querySelector('#draw')
let cardArea = document.querySelector('#card-area')

async function drawNewCard() {
    await deck.drawCard();
    img = document.createElement('img')
    img.src = image
    
    cardArea.append(img)
}


