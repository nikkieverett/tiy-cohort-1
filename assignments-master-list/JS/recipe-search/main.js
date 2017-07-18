let container = document.querySelector('main');
let queryInput = document.querySelector('input');

let url = "https://crossorigin.me/http://www.recipepuppy.com/api/?q=";

queryInput.addEventListener('keyup', function(evt){
  if(evt.keyCode === 13){
    let fullUrl = url + evt.target.value;
    fetch(fullUrl)
    .then(function(response){
      if(response.status !== 200){
        console.log(response.status);
        return;
      } else {
        response.json().then(function(data){
          for(var i=0; i < data.results.length; i++){
            let box = document.createElement('div');
            box.classList.add('box');
            let title = document.createElement('h2');
            title.textContent = data.results[i].title;
            let image = document.createElement('img');
            image.src = data.results[i].thumbnail;
            let link = document.createElement('p');
            link.textContent = data.results[i].href;
            container.appendChild(box);
            box.appendChild(title);
            box.appendChild(image);
            box.appendChild(link);
          }
        });
      }
    });
  }
});


function getData(fullUrl){
  console.log('getting data');

}
