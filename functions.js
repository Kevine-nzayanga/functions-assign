// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.


// Create an array containing the names of all items in the inventory.
let array2= ["peas","eggs","bread", "mellon","berries","passion"]

// Create a separate array with the corresponding stock quantities of each item.
let array1=[12,34,56,78,11,44]

// Write a function to add a new item to the inventory, updating both arrays.
function add(name,amount) {
    array2.push(name)
    array1.push(amount)
    console.log(array2);
    console.log(array1);
}
add("bananas",33)

function together(array1,array2) {
 inventory=Object.assign(...array2.map((k, i)=>({[k]: array1[i]}) ))
 return inventory
 }
console.log(
    together(array1,array2));


// Write a function to update the stock quantity of an existing item.
function update(name,num) {
 inventory[name]=num
 return inventory

}
console.log( update("bread", 52));

// Write a function to calculate the total number of items in the inventory.
function total() {
    sum=0
   
  for (const value in inventory) {
    if (Object.hasOwnProperty.call(inventory, value)) {
        const element = inventory[value];
        sum+=element
    }
  } 
    return sum
}
console.log("wii",total());


// Write a function to find the item with the lowest stock quantity.
 function lowest(inventory) {
 tosort=  Object.values(inventory) 
    value=(tosort.sort((a,b)=>a-b))[0]
    const key = Object.keys(inventory).find(key => inventory[key] === value);
    return key

 }
 console.log("q", lowest(inventory));


    

