// const myFriends= ["Shweta","komal","jyoti","chauhan"]
// var result=myFriends.forEach((e) => console.log(e))
// console.log(e);
 
// let numbers = [1, 2, 3, 4];
// var result=numbers.forEach((val, index) => val * val);
// // console.log(result);
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// var result=numbers.forEach((val, index) => console.log(val * val));
// console.log(result);
// console.log(numbers);

// console the sum of the Array
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum)

// update the value of each elelmemnt
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers)

// map function
// const myMarks= [1,4,6,8,10]
// myMarks.map((e) => console.log(e*2));
 
// const myFriends= ["Shweta","komal","jyoti","chauhan"]
// var result= myFriends.forEach((e) => e)
// console.log(result);
// let numbers = [1, 2, 3, 4];
// var result=numbers.map((val, index) => val * val);
// console.log(result);
// console.log(numbers);

// filter function
// ES6 way
// var numbers = [1, 2, 6, 8, 12, 14];
// var a= numbers.filter(element => element>5)
// console.log(a);

// Reduce

// Example:

// var number = [2, 4, 6, 8, 12, 14];
 
// // Normal Way
// var sum = number.reduce(function(total, element){
//    return total + element;
// })
// console.log(sum);
 
// Output : 46
 
// // es6 way
// var sum = number.reduce((total, value) => total + value)
// console.log(sum);
 
// Find
// Example:

// input array contains some numbers as elements.
var numbers= [-0.20,-10, 0.2, -40,1, -25];
 
// method (return element > 0).
var found = numbers.find(function (element) {
   return element > 0;
});
console.log(found);
 
// Es6 way
var found = numbers.find((element) =>
   element > 0);
console.log(found);
 


 


