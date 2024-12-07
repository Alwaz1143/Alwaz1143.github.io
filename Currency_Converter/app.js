const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const btn = document.querySelector("form button");
const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
function loadSelect(){
    for (const select of dropdowns) {
        for (const currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            if (select.name === 'from' && currCode === 'USD') {
                newOption.selected = "selected";
            }
            else if (select.name === 'to' && currCode === 'INR') {
                newOption.selected = "selected";
            }
            select.append(newOption);
        }
        select.addEventListener("change", (evt)=>{
            updateFlag(evt.target);
        })
    }
}
loadSelect();

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSource = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSource;
}
async function updateExchangeRate(){
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 0){
        amount.value = "1";
        amtVal = 1;
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    // console.log(URL);
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // console.log(rate);

    let finalAmount = amtVal * rate; 
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}
document.addEventListener("DOMContentLoaded", updateExchangeRate())

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
}) 

function reset(){
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    amtVal = 1
    amount.value = "1";
    loadSelect();
    updateExchangeRate();
    let img1 = document.querySelector("#img1");
    let img2 = document.querySelector("#img2");
    img1.src = `https://flagsapi.com/US/flat/64.png`
    img2.src = `https://flagsapi.com/IN/flat/64.png`
}