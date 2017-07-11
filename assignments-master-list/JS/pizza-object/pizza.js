var samplePizza = {
  type: 'pepperoni',
  sizeInInches: 12,
  price: 8.99,
  slices: 8
};

var p = samplePizza;

//1. Get the type of the pizza from the object and put it in this variable. Use dot notation.
var type = p.type;
console.log('pizza type?', type); // 'pepperoni'

//2. Get the size of the pizza and put it in this variable.
var size = p.sizeInInches;
console.log('size?', size); // 12

//3. Get the price of the pizza and put it in this variable.
var price = p.price;
console.log('price?', price); // 8.99

//4. Get the number of slices and put it in this variable.
var slices = p.slices;
console.log('slices?', slices); // 8

//5. Calculate the price per piece.
var pricePerSlice = (p.price / p.slices);
console.log('price per slice?', pricePerSlice); // 1.12375

//6. Change the price of the pizza to 9.99 and recalculate the price per slice.
var higherPricePerSlice = (p.price + 1) / p.slices;
console.log('higher price per slice?', higherPricePerSlice); // 1.24875

//7. This function isn't finished. Fix that. If the pizza cost is $10 or less, return true. Otherwise return false;
function isCheap(pizza) {
  if(p.price <= 10){
    return true;
  } else {
    return false;
  }
}

var isCheap = isCheap(samplePizza);
console.log('is the sample pizza cheap?', isCheap); // should be true.

//8. Create your own pizza using an object literal. It should have all the same properties as above but they can have whatever values you want.
var myPizza = {
  type: 'meat lovers',
  sizeInInches: 12,
  price: 7.99,
  slices: 8
};
console.log('my pizza', myPizza);

//9. Create a function called calculatePricePerSlice that will calculate the price per slice of a pizza. Calculate the price for your pizza.
function calculatePricePerSlice(pizza) {
  //TODO: implement this
  return pizza.price / pizza.slices;
}

//10. Call the calculatePricePerSlice function and pass your pizza as an argument. This should calculate the price per piece.
var myPricePerSlice = calculatePricePerSlice(myPizza);
console.log('my price per slice?', myPricePerSlice);
