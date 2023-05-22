// rock paper scissors game


let playerSelectionDOM = document.querySelector('.player')
let computerSelectionDOM = document.querySelector('.computer')



let btn1 = document.querySelector('.btn1').addEventListener('click',(e)=> {
    playerSelection=e.target.innerHTML
    playerSelectionDOM.innerHTML = playerSelection
})


let btn2 = document.querySelector('.btn2').addEventListener('click',(e)=> {
    playerSelection=e.target.innerHTML
    playerSelectionDOM.innerHTML = playerSelection
})


let btn3 = document.querySelector('.btn3').addEventListener('click',(e)=> {
    playerSelection=e.target.innerHTML
    playerSelectionDOM.innerHTML = playerSelection
})

