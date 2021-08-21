console.log("welcome to zomato")
function order_food(){
    console.log("first signup your account")
    let readlineSync = require("readline-sync");
    var user=readlineSync.question("choose \n1login \n2 signup")
    var name=readlineSync.question("enter your name")
    var email_id=readlineSync.question("enter your email id")
    var number=readlineSync.questionInt("enter your number")
    var details={}
    details["name"]=name
    details["email_id"]=email_id
    details["number"]=number
    console.log(details)
    console.log("your account is created successfully")
    console.log(" your avilable restraurant","\n1 punjabi dhaba ,rating3.4 \n2 apna food rating,4.5 \n3 pizza hut,rating 5 \n4 the disaster cafe,rating3.9 \n5 Empire restrorent,rating 4.8")
    var restraurant=readlineSync.question("select any restraurant")
    your_resto={"punjabi dhaba":[{"vegthali":140,"eggcurry":120,"chicke":200,"vegbiryani":300,"dahibare":230}],"apna food":[{"cake":300,"vegbiryani":200,"dahibare":200}],
    "pizza hut":[{"onion pizza":65,"paneer pizza":80,"corn pizza":150,"cheez pizza":200}],"the disaster cafe":[{"coffee":50,"tea":30,"milkshake":50,"butternan":120,"choole bhature":50}],
    "Empire restrorent":[{"paneer_masala":200,"matar_paneer":100,"rajma-chawal":120}]}  
    for (myfood in your_resto){
        if(restraurant===myfood){
            console.log("your available food items")
            // console.log(your_resto[myfood])
            var i=0;
            while(i<your_resto[myfood].length){
                // for(food in your_resto[myfood][i]){
                //     console.log(food)
                // }
                var food_item=(your_resto[myfood][i]);
                for(i in food_item){
                    console.log(i,food_item[i])

                }
                i++
                console.log("whaterver you want to eat select according to menu")
                my_favfood=readlineSync.question("entre any  ")

            }
        }
    } 
}

order_food();