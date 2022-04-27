// document.getElementById(count-el).innerText=10
 
let saveEl = document.getElementById("save-el") // pass in arguments
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count +=1
    countEl.textContent = count
}

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr 
    countEl.textContent = 0 
    count = 0
}
console.log("let's count people on the subway")

 
 


 
