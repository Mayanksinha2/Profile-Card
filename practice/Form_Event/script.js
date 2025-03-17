const inp = document.querySelector('input')
const par = document.querySelector('p')
// inp.addEventListener('click', () => {
//     console.log('input_clicked')
// })


// inp.addEventListener('dblclick', () => {
//     console.log('input_double_clicked')
// })

// inp.addEventListener('input', (e) => {
//     // console.log(e.target.value)
//     // inputValue = e.target.value // we can store this in any varible and use according to need
//     par.innerText = e.target.value
// })

// inp.addEventListener('change', (e) => {
//     console.log(e.target.value)
//     inputValue = e.target.value // we can store this in any varible and use according to need
//     par.innerText = e.target.value
// })

inp.addEventListener('focus', (e) => {
    console.log(e.target.value)
    inputValue = e.target.value // we can store this in any varible and use according to need
    par.innerText = e.target.value
})