

const cardInfo1 = {
    "title": "Nike",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "color": "#deaf01"
}

const cardInfo2 = {
    "title": "Independent",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "color": "#554a33"
}

const cardInfo3 = {
    "title": "Michael Kors",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
    "color": "#01322f"
}

// variables and it's values
const title = "Adidas"
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
const image = "https://www.pexels.com/photo/person-wearing-white-and-black-adidas-shoes-2558488/"
const color = "#deaf01"

// creating object cardInfo4 with cardInfo4's properties setting them to the variables above.
/*const cardInfo4 = { 
    "title": "title", 
    "text": "text",
    "image": "image", 
    "color": "color"
}*/

// Another way to create object cardInfo4 with properties
/* If property name and variable name match, don't need to specify the property name and will use
just the variable name by default

const cardInfo4 = { title, text, image, color }
*/

/* Hard coding the function for cardInfo1

function createCard() {
    const card = document.querySelector('.card')
    card.style.backgroundImage = `url(${cardInfo1.image})`
    card.style.color = cardInfo1.color

    const h1 = card.querySelector('h1')
    h1.textContent =  cardInfo1.title

    const p = card.querySelector('p')
    p.textContent = cardInfo1.text
}

// Calling the function
createCard()
*/

/* Creating function to handle all objects by adding in parameters (variables of the function) that will
pass an arguement (value(s)) into the function. When we call the function we pass in the arguement. 

function createCard(card, info) {
    
    card.style.backgroundImage = `url(${info.image})`
    card.style.color = info.color

    const h1 = card.querySelector('h1')
    h1.textContent =  info.title

    const p = card.querySelector('p')
    p.textContent = info.text
}

// Can store functions in a variable. Variable 'a' and 'createCard' function will operate the same
and produce the same result

const a = createCard

// create cards variable to select all element with div 'class = card' and index it like an array.

const cards = document.querySelectorAll('.card')

a(cards[0], cardInfo1)
createCard(cards[1], cardInfo2)
createCard(cards[2], cardInfo3)
*/


/* Creating an arrow function. Store the function in a variable 
*/
const createCard = (card, info) => {
    
    card.style.backgroundImage = `url(${info.image})`
    card.style.color = info.color

    const h1 = card.querySelector('h1')
    h1.textContent =  info.title

    const p = card.querySelector('p')
    p.textContent = info.text
}

const cards = document.querySelectorAll('.card')

createCard(cards[0], cardInfo1)
createCard(cards[1], cardInfo2)
createCard(cards[2], cardInfo3)

