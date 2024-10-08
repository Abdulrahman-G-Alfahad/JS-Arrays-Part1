//Step1
const groceries = [];
groceries.push("Milk", "Eggs", "Bread", "Soap", "Cheese", "Water");

//Step 2
console.log(groceries[1]);

//Step 3
console.log(groceries.length);

//Step 4
console.log(groceries[groceries.length - 1]);

//Step 5
console.log(groceries.pop());

//Step 6
groceries.push("Strawberry", "Apples");

//Step 7
const firstThreeItems = groceries.slice(0, 3);

//Challange 1
groceries.splice(2, 1);

//Challange 2
groceries.unshift("Water");

//Challange 3
groceries.splice(0, 2, "ketchup", "chili");
