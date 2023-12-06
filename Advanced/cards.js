//Program to shuffle a deck of cards

//Declare card elements
const suits = ['Heart','Spades','Diamonds,','Club'];
const values =[
    'Ace','2','3','4','5','6','7','8','9','10','Judge','Queen','King'
];
//Empty Array to Contain Cards
let deck = [];

//create a deck of cards
for(let i= 0; i< suits.length; i++){
    for(let j =0; j < values.length; j++){
        let card = {Value: values[j], Suit: suits[i]};
        deck.push(card);
    }
}
//Shuffle the cards
for(let i= deck.length -1; i > 0; i--){
    let x = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i]= deck[j];
    deck[x]=temp;
}
console.log('The first five cards are:');

//Output 5 results
for(let i= 0; i < 5; i++){
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}