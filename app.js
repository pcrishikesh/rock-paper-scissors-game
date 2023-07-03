// rock paper scissors game


let playerSelectionDOM = document.querySelector('.playerSelection')
let computerSelectionDOM = document.querySelector('.computer')



let btn1 = document.querySelector('.btn1').addEventListener('click',(e)=> {
    selection="stone"
    playerSelectionDOM.innerHTML = selection
})


let btn2 = document.querySelector('.btn2').addEventListener('click',(e)=> {
    selection="paper"
    playerSelectionDOM.innerHTML = selection

})


let btn3 = document.querySelector('.btn3').addEventListener('click',(e)=> {
    selection="scissors"
    playerSelectionDOM.innerHTML = selection

})


gameRound()