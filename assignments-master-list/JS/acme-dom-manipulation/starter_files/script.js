let portfolioData = [
    {
        img : "img/boat.jpg",
        h2 : "Boats"
    },
    {
        img : "img/hair.jpg",
        h2 : "Hair Styles"
    },
    {
        img : "img/shirts.jpg",
        h2 : "t Shirts"
    },
    {
        img : "img/dirt.jpg",
        h2 : "Dirt"
    }
];


/***************************************************/
/* 1. Add Hero Content *****************************/
/***************************************************/
let hero = document.querySelector('#hero');
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.textContent = 'ACME Design Studio';
p.textContent = 'We are dedicated to producing the best designs in the world.';

hero.appendChild(h1);
hero.appendChild(p);



/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/
let list = document.querySelector('ul');

for(let i = 0; i < portfolioData.length; i++){
  let listItem = document.createElement('li');
  let h2 = document.createElement('h2');
  let img = document.createElement('img');

  h2.textContent = portfolioData[i].h2;
  img.src = portfolioData[i].img;

  list.appendChild(listItem);
  listItem.appendChild(img);
  listItem.appendChild(h2);
}



/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/
let button = document.querySelector('#dropdown');
let nav = document.querySelector('#main_navigation');

button.addEventListener('click', function(){
  nav.classList.toggle('visible');
});
