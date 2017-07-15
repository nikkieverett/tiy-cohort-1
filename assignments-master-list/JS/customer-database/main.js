console.log(customers.results);
let body = document.querySelector('body');

let container = document.createElement('main');
let list = document.createElement('ul');
body.appendChild(container);
container.appendChild(list);

for(var i = 0; i < customers.results.length; i ++){
  let currentPerson = customers.results[i];

  let listItems = document.createElement('li');
  let image = document.createElement('img');
  let name = document.createElement('h2');
  let email = document.createElement('p');
  let address1 = document.createElement('p');
  let address2 = document.createElement('p');
  let phone = document.createElement('p');
  let social = document.createElement('p');


  image.src = currentPerson.picture.large;
  name.textContent = currentPerson.name.first + ' ' + currentPerson.name.last;
  email.textContent = currentPerson.email;
  address1.textContent = currentPerson.location.street;
  address2.textContent = currentPerson.location.city + ", " + currentPerson.location.state + ', ' + currentPerson.location.postcode;
  phone.textContent = currentPerson.phone;
  social.textContent = currentPerson.id.value;


  list.appendChild(listItems);

  listItems.appendChild(image);
  listItems.appendChild(name);
  listItems.appendChild(email);
  listItems.appendChild(address1);
  listItems.appendChild(address2);
  listItems.appendChild(phone);
  listItems.appendChild(social);


}
