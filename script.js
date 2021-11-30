
// VENDING MACHINE MINI CHALLENGE

let colaBtn = document.getElementById("cola");
let peanutsBtn = document.getElementById("peanuts");
let chocolateBtn = document.getElementById("chocolate");
let gummyBtn = document.getElementById("gummies");
let h1 = document.querySelector("h1");
let total = 0;

colaBtn.addEventListener('click', colaClick)
peanutsBtn.addEventListener('click', peanutsClick)
chocolateBtn.addEventListener('click', chocolateClick)
gummyBtn.addEventListener('click', gummyClick);

function colaClick(){
    total += 2;
    h1.innerText = `Total $${total}.00`
}
function peanutsClick(){
    total += 3;
    h1.innerText = `Total $${total}.00`
}
function chocolateClick(){
    total += 4;
    h1.innerText = `Total $${total}.00`
}
function gummyClick(){
    total += 6;
    h1.innerText = `Total $${total}.00`
}

/////   MAKE MONEY MINI CHALLENGE

let btn = document.getElementById('btn');
let input = document.getElementById('coins');
let amount = 0;


function makeMoney(event){
    event.preventDefault();
    //amount = input.value;
    //console.log(amount);
    console.log("hello")
}


btn.addEventListener('click', makeMoney);


