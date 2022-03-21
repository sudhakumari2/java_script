// callback function example
// function Gurukul(){
//    console.log("I am Navgurukul");
// }
 
// function Nav(callback){
//    console.log("I am Nav");
//    callback();
// }
 
// Nav(Gurukul);

 
// let add = function(num1,num2){
//     return num1+num2;
// }
  
// let multiply= function(num1,num2){
//     return num1*num2;
// }
  
// let calc= function (num1,num2,callback){
//     console.log(callback(num1,num2));
// }
  
// calc(2,3,add);
// calc(7,3,multiply);
 
// const numbers = [3, 4, 10, 20]
// const getLessThanFive = num => num < 5
 
// Passing getLessThanFive function into filter
// const lesserThanFive = numbers.filter(getLessThanFive)
// console.log(getLessThanFive)

// const numbers = [3, 4, 10, 20]
// const getLessThanFive = num => num < 5
// const getMoreThanTen = num => num > 10
 
// Passing getLessThanFive function into filter
// const lesserThanFive = numbers.filter(getLessThanFive)
// console.log(lesserThanFive)
// Passing getMoreThanTen function into filter
// const moreThanTen = numbers.filter(getMoreThanTen)
// console.log(moreThanTen)
// function callback(){
//     console.log("hi from callback after 1 second")
// }
  
//  setTimeout(callback, 1000)
 
// const tenSecondsLater = () => console.log('10 seconds passed!')
 
// setTimeout(tenSecondsLater, 10000)
// console.log('Start!')

// ex1
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// function isOddNumber(number) {
//     return number % 2;
// }
// const oddNumbers = numbers.filter(isOddNumber);
// console.log(oddNumbers);

// by using annonyous functio
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// let oddNumbers = numbers.filter(function(number) {
//     return number % 2;
// });
// console.log(oddNumbers); 

// by using arrow function
// let oddNumbers = numbers.filter(number => number % 2);
// console.log(oddNumbers)

// synchronous callback function
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// numbers.sort((a, b) => a - b);
// console.log((numbers));


// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"]
// let removedItems = myFavouriteGames.splice(3,"","sudha")
// console.log(myFavouriteGames)

// let mainString="My name is kumar and my friends name is Dhamu";
// let subString="is";
// let st=mainString.split(' ')
// console.log(st)
// var count=0
// for(var i=0; i<st.length; i++){
//     if(st[i]===subString){
//         count++
//     }
// }
// console.log("substring is ",count,"times")

// const words = str.split(' ');
// console.log(words);

// setTimeout function example
// function greet() {
//     console.log('Hello world');
// }
// setTimeout(greet, 3000);
// console.log('This message is shown first');

// program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId);   

//program to display time every 3 seconds
// function showTime() {

    // return new date and time
    // let dateTime= new Date();

    // returns the current local time
    // let time = dateTime.toLocaleTimeString();

    // console.log(time)

    // display the time after 3 seconds
    // setTimeout(showTime, 3000);
// }

// calling the function
// showTime();

// Use clearTimeout() Method
// program to stop the setTimeout() method

// let count = 0;

// function creation
// function increaseCount(){

    // increasing the count by 1
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// clearTimeout
// clearTimeout(id); 
// console.log('setTimeout is stopped.');


// program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// // passing argument to setTimeout
// setTimeout(greet, 1000, 'John', 'Doe');

function show(a){
    console.log("Hello" + a);
}
function hide(callback){
    var a = "NavGurukul";
    callback(a);
}
hide(show);

