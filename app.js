// rock paper scissors game


let playerSelectionDOM = document.querySelector('.player')
let computerSelectionDOM = document.querySelector('.computer')


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