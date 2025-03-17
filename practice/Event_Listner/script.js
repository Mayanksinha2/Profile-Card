const user = document.querySelector('h1')
// console.dir(user)

function Say() {
    console.log("Hello")
}

// user.onclick = Say

user.addEventListener('click', Say)

const card = document.querySelector('.card-view')
// card.addEventListener('click', () =>{
//     console.log("Card clicked")
// })
const can = document.querySelector('.container')

// function createCard() {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//    can.append(newCard)


// }

// card.addEventListener('click',function (){
//     console.log("Card clicked")
// })
let count = 1
card.addEventListener('click', () => {
    const newCard = card.cloneNode()     // Either we can do by cloning node
    // const newCard = document.createElement('div') // we can do by creating new node
    newCard.classList.add('card-view')
    newCard.innerText = count++
     can.append(newCard)
})

// card.addEventListener('mouseenter', (e) => {
//     console.log(e)
//     const newCard = card.cloneNode()     // Either we can do by cloning node
//     // const newCard = document.createElement('div') // we can do by creating new node
//     newCard.classList.add('card-view')
//     newCard.innerText = count++
//      can.append(newCard)
// })


// card.addEventListener('mouseleave', (e) => {
//     console.log(e)
//     const newCard = card.cloneNode()     // Either we can do by cloning node
//     // const newCard = document.createElement('div') // we can do by creating new node
//     newCard.classList.add('card-view')
//     newCard.innerText = count++
//      can.append(newCard)
// })


// card.addEventListener('mousemove', (e) => {
//     console.log(e)
//     const newCard = card.cloneNode()     // Either we can do by cloning node
//     // const newCard = document.createElement('div') // we can do by creating new node
//     newCard.classList.add('card-view')
//     newCard.innerText = count++
//      can.append(newCard)
// })

// card.addEventListener('drag', (e) => {
//     console.log(e)
//     const newCard = card.cloneNode()     // Either we can do by cloning node
//     // const newCard = document.createElement('div') // we can do by creating new node
//     newCard.classList.add('card-view')
//     newCard.innerText = count++
//      can.append(newCard)
// })