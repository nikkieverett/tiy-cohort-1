let calc = document.querySelector('#container');
let display = document.querySelector('#display');

let nums = [];
let operator = [];
let total = 0;
let subtoat = '';
let str = '';

calc.addEventListener('click', function(evt){
  let input = evt.target;

  if(input.classList.contains('operator')){
    addOperator(input);
  } else if(input.classList.contains('num')){
    setDisplay(input);
  } else if(input === '='){
    nums.push(str);
    display.textContent = '';
    calculate();
  }
});

function setDisplay(input){
  display.textContent += input;
  str += input;
};

function addOperator(input){
  display.textContent += input;
  nums.push(str);
  operator.push(input);
  str = '';
}

function calculate(){


}
