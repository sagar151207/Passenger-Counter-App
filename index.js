let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count +=1
    countEl.innerHTML = count
}

let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML= 0
}