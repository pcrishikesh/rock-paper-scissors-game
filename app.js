// rock paper scissors game


let options = ["rock","paper","scissors"]
let playerSelect = ""
let playerwinrate = 0
let computerwinrate = 0
let roundplay = 0 
let roundCount = 0

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

let player = document.getElementById('player')
let computer = document.getElementById('computer')
let  comment = document.getElementById('comment')
let result = document.getElementById('result')
let round = document.getElementById('rounds')
let restart = document.getElementById('restart')

restart.addEventListener('click', restartDo)

function getComputerChoice() {
    let random = Math.floor(Math.random() * options.length)
    return options[random]
}

function restartDo() {
    playerSelect = ""
    playerwinrate = 0
    computerwinrate = 0
    roundplay = 0
    roundCount = 0
    player.innerHTML = ""
    computer.innerHTML = ""
    comment.innerHTML = ""
    result.innerHTML = ""
    round.innerHTML = 0
}

mainClick()

function mainClick() {
    rock.addEventListener('click', ()=> {
        playerSelect = "rock"
        Round(playerSelection(), getComputerChoice())
        roundplay+=1
        player.innerHTML = playerwinrate
        computer.innerHTML = computerwinrate
        roundCount++   
        round.innerHTML = roundCount
    })

    paper.addEventListener('click', ()=> {
        playerSelect = 'paper'
        Round(playerSelection(), getComputerChoice())
        roundplay+=1
        player.innerHTML = playerwinrate
        computer.innerHTML = computerwinrate
        roundCount++
        round.innerHTML = roundCount
    })
    
    scissors.addEventListener('click', ()=> {
        playerSelect = 'scissors'
        Round(playerSelection(), getComputerChoice())
        roundplay+=1
        player.innerHTML = playerwinrate
        computer.innerHTML = computerwinrate
        roundCount++
        round.innerHTML = roundCount
    })
}


function playerSelection() {
    return playerSelect
}


function Round(player,computer){   
    // true statement
    if (player == options[0] && computer == options[0]) {
        comment.innerHTML = "oops same!"
    }
    else if (player == options[1] && computer == options[1]) {
        comment.innerHTML = "oops same!"
    }
    else if (player == options[2] && computer == options[2]) {
        comment.innerHTML = "oops same!"
    }

    // rock
    if (player == options[0] && computer == options[1]) {
        computerwinrate+=1
        comment.innerHTML = "oops you lost!"
    }
    else if (player == options[0] && computer == options[2]) {
        comment.innerHTML = 'yee you won!'
        playerwinrate+=1 
    }
    
    // paper
    if (player == options[1] && computer == options[0]) {
        console.log('yee you won!'); 
        comment.innerHTML = 'yee you won!'
        playerwinrate+=1
    }
    else if (player == options[1] && computer == options[2]) {
        computerwinrate+=1
        comment.innerHTML = "oops you lost!"
    }

    // scissors
    if (player == options[2] && computer == options[0]) {
        comment.innerHTML = "oops you lost!"
        computerwinrate+=1
    }
    else if (player == options[2] && computer == options[1]) {
        console.log('yee you won!'); 
        comment.innerHTML = 'yee you won!'
        playerwinrate+=1
    }


    if (roundplay == 5) {
        restart.style.display = "block"
        if (playerwinrate > computerwinrate) {
            result.innerHTML = "yee you are the winner"
        }
        else if (playerwinrate == computerwinrate) {
            result.innerHTML = "draw!"
        }
        else {
            result.innerHTML = "oops computer has won"
        }
    }else {
        return
    }
    

}





