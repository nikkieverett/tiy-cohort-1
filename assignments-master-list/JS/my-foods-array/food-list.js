//Add console.log statements if you wish. There is already a console log of the entire array at the very end, so you can always see what the array is like as you go through this exercise.
//Don't change any of the console.log statements that are here. They should all be logging true if you complete this successfully.

// This is an array created with array literal syntax.
let myFoods = ['steak', 'nachos', 'brocolli'];

//1. You can use the length property to get the number of items in the array.
var length = myFoods.length;
console.log('1. Initial length is 3?', length === 3);


//You can get any item from the array if you know its index. Index numbers start at zero.
//2. Get the first item in the list, which would be at index zero.
var firstItem = myFoods[0];
console.log('2. Did you get the first item?', firstItem === 'steak');


//3. Get the second item in the list, which would be at index 1.
var secondItem = myFoods[1];
console.log('3. Did you get the second item?', secondItem === 'nachos');


//You have decided that you like shrimp.
//4. Use the `push` method to add the item 'shrimp' to the array.
myFoods.push('shrimp');
console.log('4. Length of 4 after adding shrimp?', myFoods.length === 4); //This should be true if you successfull added the food item.


//You have developed a severe allergy to milk.
//5. Use splice to remove 'nachos' from the array.

//Removing an item should knock the length back down to 3.
myFoods.splice(1,1);
console.log('5. Length of 3 after removing nachos?', myFoods.length === 3);


//You have developed a severe dislike of shrimp.
//6. Use pop to remove the last item, which should be shrimp.
myFoods.pop();
console.log('6. Length of 2 after removing the last item?', myFoods.length === 2);


//You realize that you need a wider variety of foods to eat.
//7. Use the push method twice to add spinach and carrots to your foods.
myFoods.push('spinach', 'carrots');
console.log('7. Length of 4 after adding spinach and carrots?', myFoods.length === 4);


//You realize that you would rather eat cauliflower than spinach.
//8. Figure out the index of spinach and replace spinach with cauliflower.
myFoods.splice(2, 1, 'cauliflower');
console.log('8. Cauliflower is where it should be?', myFoods[2] === 'cauliflower');



//To help you visualize the array.
console.log('The array', myFoods);
