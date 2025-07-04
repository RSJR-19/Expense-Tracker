let getMainWrapper = document.getElementById("main-wrapper")
let getMainContainer = document.getElementById("main-container")
let getOverlayOne = document.getElementById("overlay-log-one")
let getFullScreenOverlayOne = document.getElementById("full-screen-overlay-one")
let getFullScreenOverlayTwo = document.getElementById("full-screen-overlay-two")
let getPurposeInput = document.getElementById("purposeInput")
let getPriceInput = document.getElementById("priceInput")
let purposeInputValue = "";
let priceInputValue = 0;
let isPurposeGiven = false;
let isPriceGiven = false;

function logExpense() {
setTimeout(() => {
getMainContainer.style.display = "none";
getFullScreenOverlayOne.style.display = "flex";

},160);
}

function backToMain() {
    setTimeout(() => {
getFullScreenOverlayOne.style.display = "none";
getMainContainer.style.display = "flex";
},160);
}


