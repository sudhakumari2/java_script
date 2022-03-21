// question1
// let readlineSync = require("readline-sync");
// var number=readlineSync.question("enter a number")
// if (number<10){
//     console.log("num is less than 10")
// }
// else if(number>10 && number<20){
//     console.log("num is less than 20")
// }
// else{
//     console.log("greater than 20")
// }

// question2
// var num1 = 300 - 123
// let readlineSync = require("readline-sync");
// var num2=readlineSync.question("enter a number")
// if(num1==num2){
//     console.log("equal hai")
// } 
// else{
//     console.log("not equal")
// }

// question3
// var number1 = 44 * 30;
// let readlineSync = require("readline-sync");
// var number2=readlineSync.questionInt("enter a number")
// if(number1<=number2){
//     console.log("greater than or equal")
// }
// else{
//     console.log("lesser")
// }

// question4
// let readlineSync = require("readline-sync");
// var water=readlineSync.questionInt("enter water level")
// if (water<1){
//     console.log("more water needs to fill")
// }
// else if (water>=1 && water<=10){
//     console.log("no need to fill water")
// }

// else{
//     console.log("overflow")
// }
    
// question5
// let readlineSync = require("readline-sync");
// var varx=readlineSync.questionInt("enter a number")
// if(varx%2===0){
//     console.log("divisible hai")
// }
// else{
//     console.log("not divisible")
// }

// question6
// let readlineSync = require("readline-sync");
// var varX=readlineSync.questionInt("enter a number")
// var vary=readlineSync.questionInt("enter a number")
// if(varX%vary===0){
//     console.log("divisible hai")
// }
// else{
//     console.log("not divisible")
// }

// question7
// let readlineSync = require("readline-sync");
// var number1=readlineSync.questionInt("enter a number")
// var number2=readlineSync.questionInt("enter a number")
// if(number1>number2){
//     console.log("number1 is greater")
// }
// else{
//     console.log("number2 is greater")
// }

// question8
// let readlineSync = require("readline-sync");
// var number=readlineSync.questionInt("enter a number")
// if(number%5===0 && number%15===0){
//     console.log("divisible by both ")
// }
// else{
//     console.log("not divisible")
// }

// question9
// let readlineSync = require("readline-sync");
// var age=readlineSync.questionInt("enter age")
// if(age>=5){
//     console.log("you can go school")
// }
// if(age>=18){
//     console.log("you can vote in elections.")
// }
// if(age>=21){
//     console.log("you can drive a car")
// }
// if(age>=24){
//     console.log("you can marry")
// }
// if(age>=25){
//     console.log("you can drink")
// }

// x=6;
// y=7
// console.log(x+y)
// var x
// var y
// const readlineSync = require("readline-sync");
// var substring=readlineSync.question("enter any sentence")
// var string=readlineSync.question("enter any words")
// var i=0;
// var c=0;
// const dic={};
// var sentence=substring.split(' ')
// while (i<sentence.length){
//     if(sentence[i]===string){
//         c++
//     }
//     i++
//     dic[string]=c
// }
// console.log(dic)

// find the binary to decimal
const binary_number=[1,1,0,1,1,0,0,0];
var a=0;
var sum=0;
for(var i=binary_number.length-1; i>=0; i--){
    sum=sum+binary_number[i]*2**a
    a++
}
console.log(sum)

// i=binary_number.length-1;
// while(i>=0){
//     sum=sum+binary_number[i]*2**a
//     a=a+1
//     i=i-1
// }
// console.log(sum)

// const n=require("readline-sync")
// var sentence=n.question("enter any sentence")
// var words=n.question("enter a words")
// var i=0;
// let sep_array=[]
// while(i<sentence.length){
//     if (sentence[i]===words){
//         sentence[i].split()
//     }
//     i++
//     sep_array.push(sentence[i])
// }
// console.log(sep_array)

// let readlineSync = require("readline-sync");
// var varx=readlineSync.questionInt("enter a number")

// const l=[1,5,6,10,15,11,13]
// var i=0
// while (i<l.length){
//     k=2
//     c=0
//     while (k<l[i]){
//         if (l[i]%k==0){
//             c+=1
//         k+=1
//         }
//     if (c==0){
//         console.log(l[i],'prime') 
//     }
//     i++
//     }
// }