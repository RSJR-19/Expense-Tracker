let getMainWrapper = document.getElementById("main-wrapper")
let getMainContainer = document.getElementById("main-container")
let getOverlayOne = document.getElementById("overlay-log-one")
let getFullScreenOverlayOne = document.getElementById("full-screen-overlay-one")
let getFullScreenOverlayTwo = document.getElementById("full-screen-overlay-two")
let getPurposeInput = document.getElementById("purposeInput")
let getPriceInput = document.getElementById("priceInput")
let getProceedBtn = document.getElementById("proceedButton");
let getBackBtn = document.getElementById("back-button");
let getConfirmAmount = document.getElementById("confirm-amount");
let getPurposeDetails = document.getElementById("purpose-details");
let getPurposeAmountBox = document.getElementById("amountDetailsBox");

let purposeInputValue = "";
let priceInputValue = 0;
let isPurposeGiven = false;
let isPriceGiven = false;
getPriceInput.placeholder = `Input Gastos price...` ;
 getPurposeInput.placeholder = `Input Gastos details...`;
 getPriceInput.style.border = "3px black solid";
 getPurposeInput.style.border = "3px black solid";




function logExpense() {
setTimeout(() => {
getMainContainer.style.display = "none";
getFullScreenOverlayOne.style.display = "flex";
getPriceInput.placeholder = `Input Gastos price...` ;
getPurposeInput.placeholder = `Input Gastos details...`;
getPriceInput.style.border = "3px black solid";
 getPurposeInput.style.border = "3px black solid";

},160);
}

function backToMain() {
    setTimeout(() => {
getFullScreenOverlayOne.style.display = "none";
getMainContainer.style.display = "flex";
},160);
}


function enterPurpose() {
purposeInputValue = getPurposeInput.value;
getPurposeInput.style.border = "3px solid black";
if (purposeInputValue !== ""){
isPurposeGiven = true;
if (isPriceGiven === false){
getPriceInput.focus();
}


}
else {
  isPurposeGiven = false;
getPurposeInput.placeholder = `Please input valid detail * `
getPurposeInput.style.border = "3px solid red";


}
validateProceed();
}

getPurposeInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
  enterPurpose()
getPurposeInput.blur()
}});

getPriceInput.addEventListener("input", () => {
  if (getPriceInput.value.length > 6) {
    getPriceInput.value = getPriceInput.value.slice(0,6)}
  });



function enterPrice() {
priceInputValue = getPriceInput.value;
getPriceInput.style.border = "3px black solid";
if(priceInputValue > 0){
  isPriceGiven = true;
  if (isPurposeGiven === false) {
    getPurposeInput.focus()
  }

  
}
else {
  isPriceGiven = false;
  getPriceInput.placeholder = `Please input valid amount`;
  getPriceInput.style.border = "3px red solid";
}
validateProceed();
}

getPriceInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    enterPrice();
    getPriceInput.blur();
  }});
  
  getPurposeInput.addEventListener("focus", () => {
  getPurposeInput.style.border = "3px solid black";
  getPurposeInput.placeholder = `Input Gastos details...`;
  
});


  getPriceInput.addEventListener("focus", () => {
  getPriceInput.style.border = "3px solid black";
  getPriceInput.placeholder = `Input Gastos price...` ;
});

function validateProceed(){
if(isPurposeGiven === true && isPriceGiven == true){
getProceedBtn.style.backgroundColor =  " rgb(246, 223, 11)";
}
else {
  getProceedBtn.style.backgroundColor = "rgb(195, 192, 168)";
}
}

function logExpenseProceed(){
if (isPurposeGiven === true && isPriceGiven === true){
  setTimeout(() => {
  getFullScreenOverlayOne.style.display = "none";
  getFullScreenOverlayTwo.style.display = "flex";
  priceInputValue = getPriceInput.value;
  purposeInputValue = getPurposeInput.value;
  proceedDetails()
  },160)
}

else {
  if(isPurposeGiven === false){
    getPurposeInput.focus();
  }
  else if (isPriceGiven === false){
    getPriceInput.focus()
  }
}}


function backToFirst() {
  setTimeout(() => {
getFullScreenOverlayTwo.style.display = "none";
getFullScreenOverlayOne.style.display = "flex";
getPurposeInput.value = "";
getPriceInput.value = "";
isPriceGiven = false;
isPurposeGiven = false;
validateProceed();
  },160)




}

function proceedDetails() {
  getConfirmAmount.innerHTML = priceInputValue;
  getPurposeDetails.innerHTML = purposeInputValue;



}

function confirmLog() {
  setTimeout (() => {
getPurposeAmountBox.display //finish this later//


  },160)




}
