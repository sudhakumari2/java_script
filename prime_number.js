// var n=require("readline-sync");
// const num=n.question("enter number: ");
// let i=2
// var count=0;
// while (i<num) {
//        if (num%i===0) {
//        count=count+1
//        }
//        i++;
// }
// if (count===0) {
//        console.log("prime number")
// }
// else {
//    console.log("not prime number")
// }

// for (var i=0;i<10;i++) {
//     console.log(i)
//  }

// var fullName = function(firstName, lastName) {
//    return `${firstName} ${lastName}`;
//   }
//   console.log
  
// console.log(fullName("Jamal", "Uddin"));

// check prime number hai ya nhi 
// var n=require("readline-sync");
// const num=n.question("enter number: ");
// let i=2
// var count=0;
// while (i<num){
//    if (num%i===0){
//       count+=1
//    }
//    i++;
// }
// if(count===0){
//    console.log("prime number hai")
// }
// else{
//    console.log("prime number nhi h")
// }

// prime number 1 to 1000
let i=1
while (i<100){
   var j=2
   let count=0
   while (j<i){
      if (i%j===0){
         count+=1
      }
      j++;
   }
   if(count===0){
   console.log("prime number hai",i)
   }
   else{
   console.log("prime number nhi h",i)
   }
   i++;
}