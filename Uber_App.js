console.log("have fun when the wheel runs : ")
let readlineSync = require("readline-sync");
var name=readlineSync.question("can i know the your good name")
console.log("hi",name, "have a safe and happy riding")

function ride(){
    let my_location=["sarjapur","d-mart","text-mart","airport"]
    let places={"bangalore_campus":20,"sarjapur_campus":30,"D_mart":36,"text_mart":29,"balari":43,"airport":60,
"ksr_junction":55,"shivaji_nagar":80}
    let readlineSync = require("readline-sync");
    console.log(my_location)
    var pickup_point= readlineSync.question("please pick the starting point: ")
    for (var i=0; i<my_location.length; i++){
        if(my_location[i]===pickup_point){
            let readlineSync = require("readline-sync");
            console.log(places)
            var yourplaces= readlineSync.question("enter your destination: ")
            for (index_of_places in places){
                if(yourplaces === index_of_places){
                    let available_auto_rating=[3,3.5,4,4.8,"any of it"]
                    // console.log(available_auto_rating)
                    let select_uber=readlineSync.question("choose ur driver according to their ratings for better experience");
                console.log("ur cab is arriving soon for the travel of",places[index_of_places],"with the payment of",places[index_of_places]*5)
                }
            }
        }
    }
        
}
    
    

ride()