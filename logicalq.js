// let a= [1,2,'5','p','q','c']
// let readline = require("readline-sync")
// var input = readline.questionInt("enter any number")
// var c = 0 
// for(var i = a.length-1 ; i>=0; i--){
//     c+=1
//     console.log(a[i])
//     if (c===input){
//         break
//     }
// }
// console.log(c)

// let a= [1,2,'5','p','q','c']
// let readline = require("readline-sync")
// var input = readline.questionInt("enter any number")
// var len = a.length
// var x = len-input
// var i = x;
// while(i<len){
//     console.log(a[i])
//     i++
// }

// let readline = require("readline-sync")
// var name = readline.question("enter any name")
// const string = name
// var stor = ''
// for(var i = name.length-1 ; i>=0; i--){
//     console.log(name[i])
//     stor = stor+name[i]
// }
// if(string==stor){
//     console.log("palindrome h")
// }
// else{
//     console.log("palindrome nhi h")
// }

var str = "hello world";
var str1 = []
var st = str.split(' ');
// console.log(st);
for(var i = st.length-1; i>=0; i-=1){
    str1.push(st[i])
}
let string = str1.toString()
console.log(string);