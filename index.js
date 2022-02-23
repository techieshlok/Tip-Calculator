const billInput = document.querySelector('.bill-input')
const peopleInput = document.querySelector('.people-input')
const tipPerPerson = document.getElementById("tip-amount")
const totalPerPerson = document.getElementById("total-amount")
const tips = document.querySelectorAll(".tips"); //querySelectorAll is use to selcet all the button
const tipCustom = document.querySelector(".tip-custom")
const resetBtn = document.querySelector(".reset")
const error = document.querySelector(".error")


billInput.addEventListener('input', billInputFun)
peopleInput.addEventListener('input', peopleInputFun)
tips.forEach(function(val) {
  val.addEventListener("click", handleClick);
});
tipCustom.addEventListener('input', tipInputFun)
resetBtn.addEventListener('click', reset)

billInput.value = '0.0' //deffult value for bill input after grabbing with DOM
peopleInput.value = '1' //deffult value for number of people input after grabbing with DOM
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2); //deffult value for amount Tip with a fix initial of 0.00 made by --> toFixed(2) --> the 2 is for the number of zeros
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2); //deffult value for total amount Tip with a fix initial of 0.00 made by --> toFixed(2) --> the 2 is for the number of zeros

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

// after adding eventLister, we declered a function, in that function 
//billvalue which was initialy equated to 0.0 is now declered to float (parseFloat)
function billInputFun() {  
    billValue = parseFloat (billInput.value);
    calculateTip();
}

// after adding eventLister, we declered a function, in that function 
//peoplevalue which was initialy equated to 0.0 is now declered to float (parseFloat)
function peopleInputFun() {
    peopleValue = parseFloat(peopleInput.value);
  
    if (peopleValue < 1) {
      error.style.display = "flex";
      peopleInput.style.border = "thick solid red";
    } else {
      error.style.display = "none";
      peopleInput.style.border = "none";
      calculateTip();
    }
  }

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value / 100);
    
    tipCustom.forEach (function(val){
        val.classList.remove("active-tip");
    })

    calculateTip();
}


function tipInputFun() {
    tipValue = parseFloat(tipCustom.value / 100);
  
    tips.forEach(function (val) {
      val.classList.remove("active-tip");
    });
    calculateTip();
  }
  

// Listener for highlight button (active button) on-click
function handleClick(event) {
    tips.forEach(function (val) {
      val.classList.remove("active-tip");
      if (event.target.innerHTML == val.innerHTML) {
        val.classList.add("active-tip");
        tipValue = parseFloat(val.innerHTML) / 100;
      }
    });
    calculateTip();
  }

  function calculateTip() {
    if (peopleValue >= 1) {
      let tipAmount = (billValue * tipValue) / peopleValue;
      let total = (billValue + tipAmount) / peopleValue;
      tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
      totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
  }

  function reset(){
    billInput.value = '0.0' //deffult value for bill input after grabbing with DOM
    billInputFun()
    peopleInput.value = '1' //deffult value for number of people input after grabbing with DOM
    peopleInputFun()
    tipCustom.value = "";
  }