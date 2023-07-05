// rock paper scissors game


let options = ["rock","paper","scissors"]
let playerSelect = ""
let playerwinrate = 0
let computerwinrate = 0

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

function getComputerChoice() {
    let random = Math.floor(Math.random() * options.length)
    return options[random]
}

rock.addEventListener('click', ()=> {
    playerSelect = "rock"
})

paper.addEventListener('click', ()=> {
    playerSelect = "paper"
})

scissors.addEventListener('click', ()=> {
    playerSelect = "scissors"
})

function playerSelection() {
    if (playerSelect == "rock") {return options[0]}
    else if (playerSelect == "paper") {return options[1]}
    else if (playerSelect == "scissors") {return options[2]}
}

Round(playerSelection(), getComputerChoice())

function Round(player,computer){    

    // true statement
    if (player == options[0] && computer == options[0]) {console.log('oops same!');}
    else if (player == options[1] && computer == options[1]) {console.log('oops same!');}
    else if (player == options[2] && computer == options[2]) {console.log('oops same!');}

    // rock
    if (player == options[0] && computer == options[1]) {console.log('oops you lost!'); computerwinrate+=1}
    else if (player == options[0] && computer == options[2]) {console.log('yee you won!'); playerwinrate+=1 }
    
    // paper
    if (player == options[1] && computer == options[0]) {console.log('yee you won!'); playerwinrate+=1}
    else if (player == options[1] && computer == options[2]) {console.log('oops you lost!'); computerwinrate+=1}

    // scissors
    if (player == options[2] && computer == options[0]) {console.log('oops you lost!'); computerwinrate+=1}
    if (player == options[2] && computer == options[1]) {console.log('yee you won!'); playerwinrate+=1}

}


