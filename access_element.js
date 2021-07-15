// let fruits = ['Apple', 'Banana']
 
// fruits.push('Orange')
//     console.log (fruits)

// let myFavouriteGames = ["Chess", "Ludo", "Badminton"]
// myFavouriteGames.unshift([2]="kabbaddi")
// console.log(myFavouriteGames)

// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"]
// myFavouriteGames.splice(3,1)
// console.log(myFavouriteGames)

// var arr = [ 'A', 'B', 'D', 'E' ];
// arr.splice(2, 1);
// console.log(arr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); 
console.log(fruits)