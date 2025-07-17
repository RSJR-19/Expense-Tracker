let getMainWrapper = document.getElementById("main-wrapper")
let getMainContainer = document.getElementById("main-container")
let getTrackExpenses = document.getElementById("overlay-track-screen")
let trackLogList = document.getElementById("track-expense-loglist")
let trackExpenseButtons = document.getElementById("trackExpenseButtons")
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
let trackExpenseH1 = document.getElementById("trackExpenseH1");
let setBudgetScreen = document.getElementById("set-budget-screen")
let budgetInput = document.getElementById("input-budget-space");
let confirmBudgetBtn = document.getElementById("confirm-budget-btn");
let dayTodayH1 = document.getElementById("dayTodayH1");
let budgetAmountH1 = document.getElementById("budget-amount-h1");
let dayTotalBudget = document.getElementById("day-total-budget");
let amountTotalBudget = document.getElementById("amount-total-budget");
let budgetAlreadySetScreen = document.getElementById("budget-already-set-screen")
let totalGastosBudgetScrn = document.getElementById("total-gastos-budget-screen")
const budgetCheckScreen = document.getElementById("budget-check-screen")
let budgetLeftH3 = document.getElementById("budget-left-h3");
const backCheckBudgetBtn = document.getElementById("back-check-budget")
let isConfirmed = false;
let purposeInputValue = "";
let priceInputValue = 0;
let isSettingBudget = false;
let isPurposeGiven = false;
let isPriceGiven = false;
let isOpening = false;
let isBudgetSet = false;
let totalGastos = Number(localStorage.getItem("totalGastosLocalSave")) || 0;
let gastosLogs = JSON.parse(localStorage.getItem("gastosLogsArray")) || [];
let getBudgetLocalStorage = JSON.parse(localStorage.getItem("budgetLocalStorage"))||[];
let currentDayLog = JSON.parse(localStorage.getItem("currentDay"))||[];
const statusLog = JSON.parse(localStorage.getItem("budgetStatusCheck")) || false;

trackLogList.style.display = "flex";

let dateToday = new Date().toLocaleDateString()
if (dateToday !== currentDayLog) {
resetLog()

}
else if (dateToday === currentDayLog) {
console.log("testing")
}

dateToday = new Date().toLocaleDateString()
localStorage.setItem("currentDay", JSON.stringify(dateToday))



validateConfirmBudget();
dayOfWeek();


function isTodaySameAsStoredDate() {
  let storedData = JSON.parse(localStorage.getItem("budgetLocalStorage")) || [];
  if (storedData.length === 0) return false;

  let storedDate = storedData[storedData.length - 1].date;
  let today = dayOfWeek()

  return storedDate === today;
}

if (!isTodaySameAsStoredDate()) {
  console.log("burp");
}


function dayOfWeek() {
let month = new Date().getMonth()
 month = new Date().getMonth()
if (month === 0) {
  month = "Jan"
}
else if (month === 1) {
  month = "Feb"
}
else if (month === 2) {
  month = "Mar"
}else if (month === 3) {
  month = "Apr"
}else if (month === 4) {
  month = "May"
}else if (month === 5) {
  month = "Jun"
}else if (month === 6) {
  month = "Jul"
}else if (month === 7) {
  month = "Aug"
}else if (month === 8) {
  month = "Sep"
}else if (month === 9) {
  month = "Oct"
}else if (month === 10) {
  month = "Nov"
}else if (month === 11) {
  month = "Dec"
}
day = new Date().getDate()
if (day < 10) {
  day = `0${day}`
}
year = new Date().getFullYear()
toDayIs = `${month} ${day}, ${year}`
return toDayIs

}




function resetLog(){
  localStorage.removeItem("totalGastosLocalSave");
  localStorage.removeItem("gastosLogsArray");
  localStorage.removeItem("budgetLocalStorage");
  localStorage.removeItem("budgetStatusCheck");

  budgetDetails = [];
  totalGastos = 0;
  gastosLogs = [];
  isBudgetSet = false;

  getTotalGastosTitle.innerHTML = "Wala ka pang gastos..."
  trackLogList.innerHTML = "";
}

gastosLogs.forEach((log, index, counter) => {
  createGastosDiv(log.purpose, log.amount, index, log.counter);
});




function createGastosDiv(purpose, amount, divNumber, counter) {
  let monthDate = new Date().getMonth()
  let dayDate = new Date ().getDate()
  let specialDay = (monthDate === 4 && dayDate === 22)
   let gastosDiv = document.createElement("div");
  gastosDiv.style.width = "95%";
  gastosDiv.style.height = "60px";
  gastosDiv.style.border = "3px solid black";
  gastosDiv.style.borderRadius = "10px";
  if(!specialDay){
  gastosDiv.style.backgroundColor = "rgb(246,223,11)";
  }
  else {
  gastosDiv.style.backgroundColor = "rgba(11, 246, 226, 1)";
  }
  gastosDiv.innerHTML = `<h4>Gastos #${counter} - ₱${amount}</h4>`;
  gastosDiv.style.display = "flex";
  gastosDiv.style.justifyContent = "center";
  gastosDiv.style.alignItems = "center";
  gastosDiv.style.fontFamily = "Comic Neue";
  gastosDiv.style.marginTop = "5px";
  gastosDiv.style.marginBottom = "5px";
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
  isOpening = true;
  trackExpenseButtons.style.display = "none";
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
const budgetCheckScreen = document.getElementById("budget-check-screen")
budgetCheckScreen.style.display = "none"
let dateToday = new Date().toLocaleDateString()
localStorage.setItem("currentDay", JSON.stringify(dateToday))

getMainContainer.style.display = "none";
getTrackExpenses.style.display = "none";
getFullScreenOverlayOne.style.display = "flex";
getPriceInput.placeholder = `Input Gastos price...` ;
getPurposeInput.placeholder = `Input Gastos details...`;
getPriceInput.style.border = "3px black solid";
 getPurposeInput.style.border = "3px black solid";
 getPriceInput.value = "";
 getPurposeInput.value = "";
 isPriceGiven = false;
 isPurposeGiven = false;
 validateProceed();

},160);
}

function checkStatus() {
setTimeout(()=>{
  const statusLog = JSON.parse(localStorage.getItem("budgetStatusCheck")) || false;
  if (statusLog === true) {
    logExpense()
  }
  else {
    const budgetCheckScreen = document.getElementById("budget-check-screen")
    budgetCheckScreen.style.display = "flex"

  }


},160)
}

function closeBudgetCheck() {
const budgetCheckScreen = document.getElementById("budget-check-screen")
budgetCheckScreen.style.display = "none"

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
    index: (gastosLogs.length)+ 1,
    counter: (gastosLogs.length)+ 1
  });
  console.log(gastosLogs);
  localStorage.setItem("gastosLogsArray", JSON.stringify(gastosLogs));
document.getElementById("confirm-details-title").innerHTML = `= Gastos Logged! = `
getConfirmTitle.style.backgroundColor = "orange";
getConfirmDiv.style.backgroundColor = "orange";
getPurposeAmountBox.style.backgroundColor = "#f7cd8d"
getTrackBtn.style.display = "block";
getConfirmBtn.style.display = "none";
isConfirmed = true;

let lastLog = gastosLogs[gastosLogs.length-1]
createGastosDiv(purposeInputValue, priceInputValue, gastosLogs.length - 1, lastLog.counter);



  },160)




}

function trackExpense() {
  setTimeout(() => {
 trackExpenseButtons.style.display = "flex";
budgetAlreadySetScreen.style.display = "none";
getMainContainer.style.display = "none";
getFullScreenOverlayTwo.style.display = "none";
getTrackExpenses.style.display = "flex";
  trackLogList.style.display = "flex";
openGastosDiv.style.display = "none";
setBudgetScreen.style.display = "none";
getTotalGastosTitle.style.color = "black";
 trackExpenseH1.innerHTML = "= Track Expense: ="
  },160);




}

function backMain() {
  setTimeout (() => {
    budgetAlreadySetScreen.style.display = "none";
    if (isOpening === true) {
  trackLogList.style.display = "flex";
openGastosDiv.style.display = "none";
trackExpenseButtons.style.display = "flex";
isOpening = false;
    }
    else if (isSettingBudget === true) {
      trackLogList.style.display = "flex";
setBudgetScreen.style.display = "none";
      trackExpenseH1.innerHTML = "= Track Expense: ="
getTotalGastosTitle.style.color = "black";
 trackExpenseButtons.style.display = "flex";
isSettingBudget = false;
    }

    else  {
getTrackExpenses.style.display = "none";
getMainContainer.style.display = "flex";
getPurposeInput.value = "";
getPriceInput.value = "";
isPriceGiven = false;
isPurposeGiven = false;
validateProceed();
backToFirst = false;
    }
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



function setBudget() {
console.log("yes")
isSettingBudget = true;
const budgetCheckScreen = document.getElementById("budget-check-screen")
budgetCheckScreen.style.display = "none";

if(isTodaySameAsStoredDate()){
showbudgetSetScreen()
}
else {
getTrackExpenses.style.display = "flex"
getMainContainer.style.display = "none";
 trackExpenseButtons.style.display = "none";
trackExpenseH1.innerHTML = "= Set Budget: =";
trackLogList.style.display = "none";
setBudgetScreen.style.display = "flex";
getTotalGastosTitle.style.color = "white";
budgetInput.value = "";
isBudgetSet = false;
isSettingBudget = true;

let today = dayOfWeek()
dayTodayH1.innerHTML = today;
}
}

budgetInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    budgetForToday = budgetInput.value;
    if (budgetForToday != 0 && budgetForToday > 0){
    isBudgetSet = true;
    budgetInput.blur();
    validateConfirmBudget()
    }
    else {
      budgetInput.value = "";
      budgetInput.style.border = "3px red solid";
      budgetInput.placeholder = "Budget cannot be 0 or less than 0..."
      confirmBudgetBtn.style.backgroundColor = "grey";
      isBudgetSet = false;
      budgetInput.blur();
    }

  }})

  budgetInput.addEventListener("focus", function (event) {
    budgetInput.style.border = "3px black solid";
    budgetInput.placeholder = "Please input budget for today..."
    isBudgetSet = false;
    confirmBudgetBtn.style.backgroundColor = "gray"
  })

function validateConfirmBudget() {
if (isBudgetSet === true) {
confirmBudgetBtn.style.backgroundColor = "rgb(246,223,11)";
}
else {
  confirmBudgetBtn.style.backgroundColor = "rgb(195, 192, 168)";
}}


function confirmBudget() {
if(isBudgetSet === true) {
setBudgetScreen.style.display = "none";
budgetAlreadySetScreen.style.display = "flex";
trackExpenseH1.innerHTML = "= Today's Budget: =";
let budgetForToday = Number(budgetInput.value)
let budgetDetails = []
budgetDetails.push({
  date: toDayIs,
  budget: budgetForToday,
  status: true
})
let stringBudgetDetails = JSON.stringify(budgetDetails)
localStorage.setItem("budgetLocalStorage", stringBudgetDetails)
localStorage.setItem("budgetStatusCheck", true)
showbudgetSetScreen()


}


}

function recoverLocalStorage() {
  localStorage.setItem("budgetLocalStorage", JSON.stringify([{ budget: 1000, status: true }]));
  localStorage.setItem("totalGastosLocalSave", "0");
  localStorage.setItem("gastosLogsArray", JSON.stringify([]));
  alert("Local data recovered.");
}


function showbudgetSetScreen(){
trackLogList.style.display = "none";
budgetAlreadySetScreen.style.display = "flex";
trackExpenseH1.innerHTML = "= Today's Budget: =";
getTotalGastosTitle.style.color = "white";
totalGastos = Number(localStorage.getItem("totalGastosLocalSave")) || 0;
getBudgetLocalStorage = JSON.parse(localStorage.getItem("budgetLocalStorage"))
let budgetAmountLocalStorage = ((getBudgetLocalStorage[getBudgetLocalStorage.length - 1]).budget);
dayTotalBudget.innerHTML = `${toDayIs}: `
amountTotalBudget.innerHTML = budgetAmountLocalStorage;
if (totalGastos > 0) {
totalGastosBudgetScrn.innerHTML = `Total Gastos: ₱${totalGastos}`
}
else {
totalGastosBudgetScrn.innerHTML = `Wala ka pang gastos...`
}

let budgetLeft = budgetAmountLocalStorage - totalGastos;
if (budgetLeft > 0) {
budgetLeftH3.innerHTML = `Budget Left: ₱${budgetLeft}`
}
else {
budgetLeftH3.style.textAlign = "center"
budgetLeftH3.innerHTML = `Budget Left: ${budgetLeft}<br>(Sumosobra kana...)`
}
}


let isMusicStarted = false;

function startBgMusic() {
if (!isMusicStarted) {
let bgMusic = document.getElementById("bg-music")
bgMusic.volume = 0.5;
bgMusic.play()
isMusicStarted = true;
}
}

document.addEventListener("click", startBgMusic);
//set day to localHst and finish confirmBudget() nice day Thanks be to God!//