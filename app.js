// rock paper scissors game


let playerSelectionDOM = document.querySelector('.playerSelection')
let computerSelectionDOM = document.querySelector('.computer')

let selection = ["","",""]

main()

function main() {
    onclickChange()
}

function onclickChange() {
    document.querySelector('.btn1').addEventListener('click',(e)=> {
        selection[0]="stone"
        playerSelectionDOM.innerHTML = selection[0]
    })
    
    
    document.querySelector('.btn2').addEventListener('click',(e)=> {
        selection[1]="paper"
        playerSelectionDOM.innerHTML = selection[1]
    
    })
    
    
    document.querySelector('.btn3').addEventListener('click',(e)=> {
        selection[2]="scissors"
        playerSelectionDOM.innerHTML = selection[2]
    
    })


}


for (i=0;i<selection.length;i++) {
    selection[i] = "hi"
    if (selection[i] == "hi") {
        console.log('yes');
    }else {
        console.log('no');
    }
}