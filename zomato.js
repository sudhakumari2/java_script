console.log("welcome to zomato")
function order_food(){
    console.log("first signup your account")
    const readlineSync = require("readline-sync");
    const user_choose=readlineSync.question("choose \n1 signup \n2 login")
    const user_name=readlineSync.question("enter your name")
    const user_email_id=readlineSync.question("enter your email id")
    const user_number=readlineSync.questionInt("enter your number")
    const details={}
    details["user_name"]=user_name
    details["user_email_id"]=user_email_id
    details["user_number"]=user_number
    // console.log(details)
    console.log(`${user_name} your account is created successfully`)
    console.log(" your avilable restraurant","\n1 punjabi dhaba ,rating3.4 \n2 apna food rating,4.5 \n3 pizza hut,rating 5 \n4 the disaster cafe,rating3.9 \n5 Empire restrorent,rating 4.8")
    var restraurant=readlineSync.question("select any restraurant")
    your_resto={"punjabi dhaba":[{"vegthali":140,"eggcurry":120,"chicke":200,"vegbiryani":300,"dahibare":230}],"apna food":[{"cake":300,"vegbiryani":200,"dahibare":200}],
    "pizza hut":[{"onion pizza":65,"paneer pizza":80,"corn pizza":150,"cheez pizza":200}],"the disaster cafe":[{"coffee":50,"tea":30,"milkshake":50,"butternan":120,"choole bhature":50}],
    "Empire restrorent":[{"paneer_masala":200,"matar_paneer":100,"rajma-chawal":120}]}  
    for (myfood in your_resto){
        if(restraurant===myfood){
            console.log("your available food items")
            // console.log(your_resto[myfood])
            for(var i=0; i<your_resto[myfood].length; i++){
                var food_item=(your_resto[myfood][i]);
                for(i in food_item){
                    console.log(i,food_item[i])
                }
                console.log("whaterver you want to eat select according to menu")
                my_favfood=readlineSync.question("enter any food what you like")
                if(my_favfood===i){
                    console.log("your order is comming soon ","total payment is",food_item[i]+"with delivery charge is",30)
                
                
                }

            }
        }
        else{
            console.log("sorry there is not another available restroraunt")
        
        }
    } 
}
order_food();