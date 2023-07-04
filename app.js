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

main()

function main() {
    onclickChange()
}

let btn1 = document.querySelector('.btn1').addEventListener('click',(e)=> {
    playerSelectionDOM.innerHTML=e.target.innerHTML
})


let btn2 = document.querySelector('.btn2').addEventListener('click',(e)=> {
    playerSelectionDOM.innerHTML=e.target.innerHTML
})


let btn3 = document.querySelector('.btn3').addEventListener('click',(e)=> {
    playerSelectionDOM.innerHTML=e.target.innerHTML
})

function gameRound() {

    if (yes) {
        console.log("yes");
    }else{console.log('no');}
}

gameRound()