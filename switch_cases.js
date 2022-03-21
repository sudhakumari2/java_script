// let readline = require('readline-sync')
// let arg = readline.question("Enter a value?");
// //let arg = '8'
// switch (arg) {
// case '5':
// case '6':
//   console.log( 'five or six' );
//   break;
// case '7':
//   console.log( 'Seven' );
//   break;
// case 8:
//   console.log( 'Never executes!' );
//   break;
// default:
//   console.log( 'An unknown value' );
// }

// spread_operator question by old technique
// arr1=[1,2,3]
// arr2=["a","b","c"]

// newList=[]
// for(i of arr1){
//   newList.push(i)
//   if (i==2){
//      for(j of arr2){
//         newList.push(j)
//      }
//   }
// }
// console.log(newList);
// by spread operator
// console.log([1,2,...arr2,3]);
// var value=[1,2,3,4,5]
// var variable1=[...value]
// console.log(variable1)


// Whenever we want to expand an array into some another array we will do something like this:

// normally used expand method without spread operator
// let arr1 = ['x','y'];
// let arr2 = [arr1,'c','d'];
// console.log(arr2);

// let arr1 = ['x','y'];
// let arr2 = [...arr1,'c','d'];
// console.log(arr2);


// {
//     let num=10;
//     console.log(num);
// }
//  console.log(num);
 
// concenating two array without using spread operator
// let arr1 = [1,2,3];
// let arr2 = [5,7];
// arr = arr1.concat(arr2);
// console.log(arr); 

// spread operator doing the concat job
// let arr = [1,2,3];
// let arr2 = [4,5];
// arr = [...arr,...arr2];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
 
// without a spread operator
// let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
// let myNewArray=[]
// for (i of array1){
//   if (!myNewArray.includes(i)){
//      myNewArray.push(i)
//   }
// }
// console.log(myNewArray);//[ 1, 2, 3, 4, 6 ]

// split over a string in obeject with index with spread operator
// var myName="kumar"
// console.log({...myName})

// Without a spread operator
// var myName="kumar"
// index=0
// newDict={}
// for(i of myName){
//    console.log(i);
//    newDict[index]=i
//    index++
// }
// console.log(newDict);
// { '0': 'k', '1': 'u', '2': 'm', '3': 'a', '4': 'r' }


// Copy an object

// // without a spread operator
// var place={name:"paris",country:"France"}
// var duplicate=Object.assign({},place);
// var dublicate=place
// console.log(dublicate)
// For copying a object we use Object.assign() the same we can do with a spread operator with a grace
 
// With a spread operator
// var duplicate ={...place}
// console.log(duplicate);

// Combining objects
 
// Without a spread operator
// var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
// var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
// var allCars=Object.assign({},mynewCar,myOldCar)
// console.log(allCars)

// without spread operator
// var allCars={...mynewCar,...myOldCar}
// console.log(allCars);

// function add(a,b,...c){
//     console.log(a,b);
//     console.log(c);
//  }
  
//  add(3,5,3,4)

//destructring
// var a,b,c;
// [a,b,c]=[6,3,7]
// console.log(a,b,c);

// var a,b;
// [a,b,leftout]=[2,3,4,5,6]
// console.log(a,b,leftout);
// var a,b;
// [a,b,...leftout]=[2,3,4,5,6]
// console.log(a,b,leftout);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// let firstName = person.firstName;
// let lastName = person.lastName; 
// console.log(firstName,lastName)

// let person = {
//         firstName: 'John',
//         lastName: 'Doe'
//     };
// let {firstName,lastName}=person;
// console.log(firstName,lastName)

// rest parameter ex1
// function xyz(x, y, ...z) {
//     console.log(x, ' ', y); // hey hello
  
//     console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
//     console.log(z[0]); // wassup
//     console.log(z.length); // 4
//   }
  
//   xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")

// ex2
// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a)
//   console.log("b", b)
//   console.log("manyMoreArgs", manyMoreArgs)
// }

// myFun("one", "two", "three", "four", "five", "six")



// destructring example
// var actor = {
//   name: 'Krish',
//   realName: 'Hrithik Roshan'
// };

// const {name,realName} = actor;
// ({name,realName} = actor);
// console.log(name);     // => 'Krish',
// console.log(realName);


// Objects combining

// var silverScreenDetails={name:"Chiranjeevi",realTag:"super star"}
// var realLifeDetails={realName:"Konidela siva prasad",oldTag:"Mega star"}
 
// var allActors={...silverScreenDetails,...realLifeDetails}
// console.log(allActors);

// var silverScreenDetails={name:"Chiranjeevi",tag:"super star"}
// var realLifeDetails={realName:"Konidela siva prasad",tag:"Mega star"}
 
// var allActors={...silverScreenDetails,...realLifeDetails}
// console.log(allActors);

function myCampus(campus){
  console.log(`My campus is ${campus}`);
  console.log("kumar")
}

myCampus("Sarjapura")