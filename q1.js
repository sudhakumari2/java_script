d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
for (let i in d1){
    if(i in d2){
        d2[i]=d1[i]+d2[i]
    }
    else{
        d2[i]=d1[i]
    }
}
console.log(d2)

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
} 
console.log(text)