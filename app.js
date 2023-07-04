// rock paper scissors game

// things to do 

/* 
get computer choice
get player selection
main function parameter computer and player selection return win or lose
create game function that will play five round

*/

let playerSelectionDOM = document.querySelector('.player')
let computerSelectionDOM = document.querySelector('.computer')

let selection = ["","",""]

let options = ["rock","paper","scissors"]

function main() {
    onclickChange()
}

let btn1 = document.querySelector('.btn1').addEventListener('click',(e)=> {
    playerSelectionDOM.innerHTML=e.target.innerHTML
})


Round(playerSelection(),getComputerChoice())

function Round(player,computer){

let btn3 = document.querySelector('.btn3').addEventListener('click',(e)=> {
    playerSelectionDOM.innerHTML=e.target.innerHTML
})

    // rock
    if (player == options[0] && computer == options[1]) {console.log('oops you lost!');}
    else if (player == options[0] && computer == options[2]) {console.log('yee you won!');}
    
    // paper
    if (player == options[1] && computer == options[0]) {console.log('yee you won!');}
    else if (player == options[1] && computer == options[2]) {console.log('oops you lost!');}

    // scissors
    if (player == options[2] && computer == options[0]) {console.log('oops you lost!');}
    if (player == options[2] && computer == options[1]) {console.log('yee you won!');}
}
