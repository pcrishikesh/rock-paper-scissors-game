// rock paper scissors game


let options = ["rock","paper","scissors"]
let playerSelect = ""
let playerwinrate = 0
let computerwinrate = 0
let roundplay = 0 

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

function getComputerChoice() {
    let random = Math.floor(Math.random() * options.length)
    return options[random]
}


mainClick()

function mainClick() {
    rock.addEventListener('click', ()=> {
        playerSelect = "rock"
        Round(playerSelection(), getComputerChoice())
        roundplay+=1
    })

    paper.addEventListener('click', ()=> {
        playerSelect = 'paper'
        Round(playerSelection(), getComputerChoice())
        roundplay+=1
    })
    
    scissors.addEventListener('click', ()=> {
        playerSelect = 'scissors'
        Round(playerSelection(), getComputerChoice())
        roundplay+=1
    })


}


function playerSelection() {
    return playerSelect
}


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
    else if (player == options[2] && computer == options[1]) {console.log('yee you won!'); playerwinrate+=1}

    if (roundplay == 5) {
        console.log('reset');
        if (playerwinrate > computerwinrate) {console.log('yee you are the winner');}
        else if (playerwinrate == computerwinrate) {console.log('draw!');}
        else {console.log('oops computer has won');}
    }else {
        return
    }

}





