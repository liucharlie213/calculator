const acBtn = document.getElementById("ac-btn");
const clearBtn = document.getElementById("clear-btn");
const signBtn = document.getElementById("sign-btn");
const divBtn = document.getElementById("div-btn");
const multBtn = document.getElementById("mult-btn");
const subBtn = document.getElementById("sub-btn");
const addBtn = document.getElementById("add-btn");
const equalsBtn = document.getElementById("equals-btn");

const zeroBtn = document.getElementById("zero-btn");
const oneBtn = document.getElementById("one-btn"); 
const twoBtn = document.getElementById("two-btn"); 
const threeBtn = document.getElementById("three-btn"); 
const fourBtn = document.getElementById("four-btn"); 
const fiveBtn = document.getElementById("five-btn"); 
const sixBtn = document.getElementById("six-btn"); 
const sevenBtn = document.getElementById("seven-btn"); 
const eightBtn = document.getElementById("eight-btn"); 
const nineBtn = document.getElementById("nine-btn"); 
const decimalBtn = document.getElementById("decimal-btn");

const inputEl = document.getElementById("input-el");

equalsBtn.addEventListener("click", function() {

  let equation = [];
  let inputVal = inputEl.value;

  for (let i = 0; i < inputVal.length; i++) {
    if (inputVal[i] != " "){
      if (inputVal[i] === "x") {
        equation.push("*");
      }
      else if(inputVal[i] === "÷") {
        equation.push("/")
      }
      else {
        equation.push(inputVal[i]);
      }  
    }
  }

  let equationStr = "";

  for (let i = 0; i < equation.length; i++) {
    equationStr += equation[i];
  }

  inputEl.value = math.evaluate(equationStr);
})

addBtn.addEventListener("click", function() {
  if (inputEl.value != "" && validOperator()) {
    inputEl.value += " + ";
  }
})

subBtn.addEventListener("click", function() {
  if (inputEl.value != "" && validOperator()) {
    inputEl.value += " − ";
  }
})

multBtn.addEventListener("click", function() {
  if (inputEl.value != "" && validOperator()) {
    inputEl.value += " x ";
  }
})

divBtn.addEventListener("click", function() {
  if (inputEl.value != "" && validOperator()) {
    inputEl.value += " ÷ ";
  }
})

signBtn.addEventListener("click", function() {
  if (inputEl.value != "") {
    if (inputEl.value[0] != "−") {
      inputEl.value = "− " + inputEl.value;
    }
    else {
      let str = inputEl.value;
      inputEl.value = str.substring(2);
    } 
  }
})

acBtn.addEventListener("click", function() {
  inputEl.value = "";
})

clearBtn.addEventListener("click", function() {
  let str = inputEl.value;
  inputEl.value = str.substring(0,str.length-1);
})

zeroBtn.addEventListener("click", function() {
  inputEl.value += "0";
})
oneBtn.addEventListener("click", function() {
  inputEl.value += "1";
})
twoBtn.addEventListener("click", function() {
  inputEl.value += "2";
})
threeBtn.addEventListener("click", function() {
  inputEl.value += "3";
})
fourBtn.addEventListener("click", function() {
  inputEl.value += "4";
})
fiveBtn.addEventListener("click", function() {
  inputEl.value += "5";
})
sixBtn.addEventListener("click", function() {
  inputEl.value += "6";
})
sevenBtn.addEventListener("click", function() {
  inputEl.value += "7";
})
eightBtn.addEventListener("click", function() {
  inputEl.value += "8";
})
nineBtn.addEventListener("click", function() {
  inputEl.value += "9";
})
decimalBtn.addEventListener("click", function() {
  inputEl.value += ".";
})

function validOperator() {
  let inputVal = inputEl.value;
  const conditionsArray = [
    (inputVal[inputVal.length - 2] != "+"),
    (inputVal[inputVal.length - 2] != "−"),
    (inputVal[inputVal.length - 2] != "x"),
    (inputVal[inputVal.length - 2] != "÷")
  ]

  if (conditionsArray.includes(false)) {
    return false;
  }
  else {
    return true;
  }
}
