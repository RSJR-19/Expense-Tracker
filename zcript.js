let getMainWrapper = document.getElementById("main-wrapper")
let getMainContainer = document.getElementById("main-container")
let getTrackExpenses = document.getElementById("overlay-track-screen")
let trackLogList = document.getElementById("track-expense-loglist")
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
let getConfirmDiv = document.getElementById("confirm-btn");
let getTotalGastosTitle = document.getElementById("total-gastos-h3");
let openGastosDiv = document.getElementById("open-gastos-screen")
let getOpenAmountValue = document.getElementById("open-amount-value");
let getOpenPurposeValue = document.getElementById("open-purpose-value");
let isConfirmed = false;
let purposeInputValue = "";
let priceInputValue = 0;
let isPurposeGiven = false;
let isPriceGiven = false;
let totalGastos = Number(localStorage.getItem("totalGastosLocalSave")) || 0;
let gastosLogs = JSON.parse(localStorage.getItem("gastosLogsArray")) || [];
trackLogList.style.display = "flex";

function resetLog(){
  localStorage.removeItem("totalGastosLocalSave");
  localStorage.removeItem("gastosLogsArray");
  totalGastos = 0;
  gastosLogs = [];
  getTotalGastosTitle.innerHTML = "Wala ka pang gastos..."
  trackLogList.innerHTML = "";
}

gastosLogs.forEach((log, index) => {
  createGastosDiv(log.purpose, log.amount, index);
});




function createGastosDiv(purpose, amount, divNumber) {
   let gastosDiv = document.createElement("div");
  gastosDiv.style.width = "95%";
  gastosDiv.style.height = "60px";
  gastosDiv.style.border = "3px solid black";
  gastosDiv.style.borderRadius = "10px";
  gastosDiv.style.backgroundColor = "rgb(246,223,11)";
  gastosDiv.innerHTML = `<p>${purpose} - ₱${amount}</p>`;
  gastosDiv.style.display = "flex";
  gastosDiv.style.justifyContent = "center";
  gastosDiv.style.alignItems = "center";
  gastosDiv.style.fontFamily = "Comic Neue";
  gastosDiv.style.marginTop = "10px";
  gastosDiv.classList.add("gastos-entry")
  gastosDiv.onclick = openGastosDetails;
  gastosDiv.id = divNumber;
  trackLogList.appendChild(gastosDiv);
  console.log(gastosDiv);
  console.log(gastosDiv.id);
  let gastosCounter = gastosDiv.id;
  console.log(gastosCounter)
}

function openGastosDetails(){
//trackLogList.style.display = "none";
//openGastosDiv.style.display = "flex";//




}

trackLogList.addEventListener("click", function(event) {
const clickedDiv = event.target.closest(".gastos-entry");
if (!clickedDiv) return;
let index = Number(clickedDiv.id);
let data = gastosLogs[index];

if (data) {
  setTimeout(() => {
  trackLogList.style.display = "none";
openGastosDiv.style.display = "flex";
getOpenAmountValue.innerHTML = data.amount;
getOpenPurposeValue.innerHTML = data.purpose;
  },160)
}});

if (totalGastos === 0){
  getTotalGastosTitle.innerHTML = `Wala ka pang gastos...`;
}
else {
getTotalGastosTitle.innerHTML = `Total Gastos : ₱${totalGastos}`;
}
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
getPurposeInput.value = "";
getPriceInput.value = "";
isPriceGiven = false;
isPurposeGiven = false;
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
  totalGastos = totalGastos + parseInt(priceInputValue)
  localStorage.setItem("totalGastosLocalSave",totalGastos);
  getTotalGastosTitle.innerHTML = `Total Gastos : ₱${totalGastos}`


  gastosLogs.push({
    purpose: purposeInputValue,
    amount: parseInt(priceInputValue),
    index: (gastosLogs.length)+ 1
  });
  console.log(gastosLogs);
  localStorage.setItem("gastosLogsArray", JSON.stringify(gastosLogs));
document.getElementById("confirm-details-title").innerHTML = `= Gastos Logged! = `
getConfirmTitle.style.backgroundColor = "orange";
getConfirmDiv.style.backgroundColor = "orange";
getTrackBtn.style.display = "block";
getConfirmBtn.style.display = "none";
isConfirmed = true;

createGastosDiv(purposeInputValue, priceInputValue, gastosLogs.length - 1);



  },160)




}

function trackExpense() {
  setTimeout(() => {
getMainContainer.style.display = "none";
getFullScreenOverlayTwo.style.display = "none";
getTrackExpenses.style.display = "flex";
  trackLogList.style.display = "flex";
openGastosDiv.style.display = "none";
  },160);




}

function backMain() {
  setTimeout (() => {
getTrackExpenses.style.display = "none";
getMainContainer.style.display = "flex";
getPurposeInput.value = "";
getPriceInput.value = "";
isPriceGiven = false;
isPurposeGiven = false;
validateProceed();
  }, 160)



}

function sendToTrack() {
getTotalGastosTitle.innerHTML = `Total Gastos : ₱${totalGastos}`;
 let  gastosDiv = document.createElement("div");
 gastosDiv.style.width = "95%";
gastosDiv.style.height = "60px";
gastosDiv.style.border = "3px solid black";
gastosDiv.style.borderRadius = "10px";
gastosDiv.style.backgroundColor = "rgb(246,223,11)";
gastosDiv.innerHTML = `<p>Gastos here</p>`;
gastosDiv.style.display = "flex";
gastosDiv.style.justifyContent = "center";
gastosDiv.style.alignItems = "center";
gastosDiv.style.fontFamily = "Comic Neue";
gastosDiv.style.marginTop = "10px";
console.log(gastosDiv);

trackLogList.appendChild(gastosDiv);

}