let up = document.querySelector('#hi');

up.addEventListener('click', function(evt){
  console.log(evt.target);
  console.log(evt.target.innerHTML);
  let text = Number(evt.target.innerHTML);
})
