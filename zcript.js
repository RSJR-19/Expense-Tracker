let getMainWrapper = document.getElementById("main-wrapper")
let getMainContainer = document.getElementById("main-container")
let getTrackExpenses = document.getElementById("overlay-track-box")
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
let getTrackBtn = document.getElementById("track-btn")
let getConfirmBtn = document.getElementById("confirm-log");
let getConfirmTitle = document.getElementById("confirm-title");
let getConfirmDiv = document.getElementById("confirm-btn")
let isConfirmed = false;

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
  if (isConfirmed === false){
  setTimeout(() => {
getFullScreenOverlayTwo.style.display = "none";
getFullScreenOverlayOne.style.display = "flex";
getPurposeInput.value = "";
getPriceInput.value = "";
isPriceGiven = false;
isPurposeGiven = false;
validateProceed();
  },160)}
  else if (isConfirmed === true) {
    setTimeout (() => {
    getFullScreenOverlayTwo.style.display = "none";
    getMainContainer.style.display = "flex";
    getPurposeInput.value = "";
getPriceInput.value = "";
isPriceGiven = false;
isPurposeGiven = false;
isConfirmed = false;
validateProceed();
    },160)}



  }






function proceedDetails() {
  getPurposeAmountBox.style.display = "flex";
  getPurposeAmountBox.style.flexDirection = "column";
  getConfirmAmount.innerHTML = priceInputValue;
  getPurposeDetails.innerHTML = purposeInputValue;
  document.getElementById("confirm-details-title").innerHTML = `= Confirm Details: = `
  getConfirmTitle.style.backgroundColor = "white";
  getPurposeAmountBox.style.backgroundColor = "white";
  getConfirmDiv.style.backgroundColor = "white";
  getConfirmBtn.style.display = "block";
  getTrackBtn.style.display = "none";



}

function confirmLog() {
  setTimeout (() => {
document.getElementById("confirm-details-title").innerHTML = `= Gastos Logged! = `
getConfirmTitle.style.backgroundColor = "orange";
getConfirmDiv.style.backgroundColor = "orange";
getTrackBtn.style.display = "block";
getConfirmBtn.style.display = "none";
isConfirmed = true;


  },160)




}

function trackExpense() {
  
getMainContainer.style.display = "none";
getFullScreenOverlayTwo.style.display = "none";
getTrackExpenses.style.display = "flex";
console.log("hi")



}