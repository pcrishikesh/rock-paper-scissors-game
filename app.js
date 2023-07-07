// rock paper scissors game

let options = ["rock","paper","scissors"]
let playerwinrate = 0
let computerwinrate = 0

function getComputerChoice() {
    let random = Math.floor(Math.random() * options.length)
    return options[random]
}

function playerSelection() {
    let player = prompt('select rock or paper or scissors')

    if (player == "") {
        return "invalid"
    }else if (player.toLowerCase() == "rock" || player.toLowerCase() == "paper" || player.toLowerCase() == "scissors"){
        return player.toLowerCase()   
    }
    else {
        return "invalid"
    }
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
    if (player == options[2] && computer == options[1]) {console.log('yee you won!'); playerwinrate+=1}

}

function main() {
    for (i=0;i<3;i++) {
        Round(playerSelection(),getComputerChoice())
    }

    console.log(`computer ${computerwinrate}`);
    console.log(`player ${playerwinrate}`);
    if (playerwinrate > computerwinrate) {console.log('yee you are the winner :)');}
    else if (playerwinrate == computerwinrate) {console.log('draw game');}
    else {console.log('oops computer has won');}
}

main()

