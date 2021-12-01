
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
//display a total value for the coins currently shown. Make sure it stays up-to-date when coins are added and removed.
//Replace the select with a group of radio buttons

let btn = document.getElementById('btn');
let coins = document.getElementById('coins');
let form = document.querySelector('form');
let input = document.querySelector('input');
let coinDiv = document.getElementById('coinDiv');
//extended challenge total
let totalValue = document.getElementById('totalValue'); // the h1 to display
let totalOfCoins = 0.0;
let amountOfCoins = 0;


form.addEventListener('submit', e => {
    e.preventDefault();
    amountOfCoins = input.value;
    for(let i = 0; i < amountOfCoins; i++){
        const circle = document.createElement("span");
        circle.innerText = coins.value;
        if(coins.value === "Penny"){
            circle.classList.add('penny');
            totalOfCoins += 0.01;
        } else if(coins.value === "Nickel"){
            circle.classList.add("nickel");
            totalOfCoins += 0.05;
        } else if(coins.value === "Dime"){
            circle.classList.add("dime");
            totalOfCoins += 0.10;
        } else if(coins.value === "Quarter"){
            circle.classList.add("quarter");
            totalOfCoins += 0.25;
        }
        totalValue.innerText = `Total: ${totalOfCoins.toFixed(2)}`;
        coinDiv.append(circle);
        
        //needs to be inside for loop
        circle.addEventListener('click', removeCoin);
        function removeCoin(){
            
            if(circle.classList.contains("penny")){
                totalOfCoins -= 0.01;
            } else if(circle.classList.contains("nickel")){
                totalOfCoins -= 0.05;
            } else if(circle.classList.contains("dime")){
                totalOfCoins -= 0.10;
            } else if(circle.classList.contains("quarter")){
                totalOfCoins -= 0.25;
            }
            circle.remove();
            totalValue.innerText = `Total: ${totalOfCoins.toFixed(2)}`;
        }    
    }
})


////// LIGHT BULB MINI EXERCISE
let lightBulb = document.querySelector(".lightBulb");
let btnOn = document.getElementById("on");
let btnOff = document.getElementById("off");
let btnToggle = document.getElementById("toggle");
let btnEnd = document.getElementById("end");

//lightBulb.classList.add("off");

btnOn.addEventListener('click', () => {
    lightBulb.classList.add("on");
    
});
 btnOff.addEventListener('click', () => {
     lightBulb.classList.remove("on");
     
 });
btnToggle.addEventListener('click', () => {
     lightBulb.classList.toggle("on");
});

 btnEnd.addEventListener('click', end => {
    lightBulb.remove();
    btnOn.disabled = true;
    btnOff.disabled = true;
    btnToggle.disabled = true;
    btnEnd.disabled = true;
});

