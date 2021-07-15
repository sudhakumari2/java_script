let dic={}
var i = 1;
while (i <= 5) {
    const n=require("readline-sync");
    var number=n.question("enter number ")
    let product=number*number
    dic[i]=product
    i +=1;
}
console.log(dic)

