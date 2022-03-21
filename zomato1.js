console.log("                          Hello  welcome to  the zomato aap                                \n")
function order_food(){
    console.log("Please first signup your account here:--")
    let readlineSync = require("readline-sync");
    var user_choose = readlineSync.question("\n1 login \n2 signup:--")
    var userName = readlineSync.question("Enter your name:--")
    var email_id = readlineSync.question("Enter your email id:--")
    var userNumber = readlineSync.questionInt("Enter your  phone number:--")
    var details={}
    details["name"] = userName
    details["email_id"] = email_id
    details["number"] = userNumber
    // console.log(details)
    console.log("your account is created successfully\n")
    console.log("These are avilable restraurant","\n1 punjabi dhaba ,rating3.4 \n2 apna food rating,4.5 \n3 pizza hut,rating 5 \n4 the disaster cafe,rating3.9 \n5 Empire restrorent,rating 4.8")
    var restraurant = readlineSync.question("Thesev are  the avalibal restraurant you can select any one:--\n")
    your_resto = {"punjabi dhaba":[{"vegthali":140,"eggcurry":120,"chicken":200,"vegbiryani":300,"dahibare":230}],"apna food":[{"cake":300,"vegbiryani":200,"dahibare":200}],
    "pizza hut":[{"onion pizza":65,"paneer pizza":80,"corn pizza":150,"cheez pizza":200}],"the disaster cafe":[{"coffee":50,"tea":30,"milkshake":50,"butternan":120,"choole bhature":50}],
    "Empire restrorent":[{"paneer_masala":200,"matar_paneer":100,"rajma-chawal":120}]}  
    for (myfood in your_resto){
        if(restraurant === myfood){
            console.log("These are your available food items...");
            for(var i=0; i<your_resto[myfood].length; i++){
                for(key in your_resto[myfood][i]){
                    console.log(key,"...price",your_resto[myfood][i][key]);
                    // console.log("\n")

                }
                console.log("These are avalibal items what you want to eat select according to the menu");
                my_favfood = readlineSync.question("Choose any intem according to the menu list:--");
                console.log(key,"......");
                if (my_favfood===key){
                    console.log("your order is coming soon"," your total payment is",your_resto[myfood][i][key]);
                }
        
            }
        }
    } 
}
order_food();