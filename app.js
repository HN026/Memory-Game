const cardArray = [
    {
        name: 'Image1',
        img: 'Images/Image1.png',
    },
    {
        name: 'Image2',
        img: 'Images/Image2.png',
    },
    {
        name: 'Image3',
        img: 'Images/Image3.png',
    },
    {
        name: 'Image4',
        img: 'Images/Image4.png',
    },
    {
        name: 'Image5',
        img: 'Images/Image5.png',
    },
    {
        name: 'Image6',
        img: 'Images/Image6.png',
    },
    {
        name: 'Image1',
        img: 'Images/Image1.png',
    },
    {
        name: 'Image2',
        img: 'Images/Image2.png',
    },
    {
        name: 'Image3',
        img: 'Images/Image3.png',
    },
    {
        name: 'Image4',
        img: 'Images/Image4.png',
    },
    {
        name: 'Image5',
        img: 'Images/Image5.png',
    },
    {
        name: 'Image6',
        img: 'Images/Image6.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());


const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for ( let i = 0; i < cardArray.length; i++)
    {
        const card = document.createElement('img');
        card.setAttribute('src', 'Images/Blank.png');
        card.setAttribute('class', 'alpha');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch(){

    const cards = document.querySelectorAll('#grid img');
    const resultDisplay = document.querySelector('#result');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('Check for Match');

    if(optionOneId === optionTwoId)
    {
        cards[optionOneId].setAttribute("src", "Images/Blank.png");
        cards[optionTwoId].setAttribute("src", "Images/Blank.png");
        alert('You have clicked the same card');
    }
    if (cardsChosen[0] === cardsChosen[1])
    {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'Images/Color.png');
        cards[optionTwoId].setAttribute('src', 'Images/Color.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
           cards[optionOneId].setAttribute("src", "Images/Blank.png");
           cards[optionTwoId].setAttribute("src", "Images/Blank.png");
           alert('Sorry, Try again');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    
    if(cardsWon.length == cardArray.length/2){
       resultDisplay.innerHTML = 'Congratulations! You found them all!';
    }


}

function flipCard(){
const cardId = this.getAttribute('data-id');
cardsChosen.push(cardArray[cardId].name);
cardsChosenIds.push(cardId);
this.setAttribute('src', cardArray[cardId].img);
if (cardsChosen.length === 2)
{
    setTimeout(checkMatch, 200);
}
}