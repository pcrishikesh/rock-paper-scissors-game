// rock paper scissors game

// things to do 

/* 
get computer choice
get player selection
main function parameter computer and player selection return win or lose
create game function that will play five round

*/



let options = ["rock","paper","scissors"]

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

Round(playerSelection(),getComputerChoice())

function Round(player,computer){

    // true statement
    if (player == options[0] && computer == options[0]) {console.log('oops same!');}
    else if (player == options[1] && computer == options[1]) {console.log('oops same!');}
    else if (player == options[2] && computer == options[2]) {console.log('oops same!');}

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
