const player1 = document.querySelector('#one');
const player2 = document.querySelector('#two');
const winner = document.querySelector('#winner');
const button = document.querySelector('#button');
const select = document.getElementsByTagName('select');

const options = ['scissors', 'rock', 'paper'];

let computer = '';
function randomNumber(){
  random = Math.floor(Math.random() * options.length);
  computer = options[random];
  player2.textContent = computer;
  return computer;
}

function playGame(me){
  player1.textContent = me;
  randomNumber();
  if(me === 'rock' && computer === 'scissors'){
    winner.textContent = "You're a winner!";
  } else if(me === 'scissors' && computer === 'rock') {
    winner.textContent = "Womp Womp Wommmmp!";
  } else if(me === 'paper' && computer === 'rock') {
    winner.textContent = "You're a winner!";
  } else if(me === 'rock' && computer === 'paper') {
    winner.textContent = "Womp Womp Wommmmp!";
  } else if(me === 'scissors' && computer === 'paper') {
    winner.textContent = "You're a winner!";
  } else if (me === 'paper' && computer === 'scissors' ){
    winner.textContent = "Womp Womp Wommmmp!";
  } else {
    winner.textContent = "It's a tie!";
  }
}
console.log(select);
button.addEventListener('click', function(evt){
  let me= "";
  for(var i = 0; i < select[0].options.length; i++){
    if(select[0].options[i].selected === true){
      me = select[0].options[i].value;
    }
  }
  playGame(me);
});
