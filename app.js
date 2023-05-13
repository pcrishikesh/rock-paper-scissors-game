// rock paper scissors game

let items = ["stone","paper","scissors"]

function getComputerChoice() {
    let random = Math.floor(Math.random() * items.length)
    return items[random]
}

console.log(getComputerChoice());