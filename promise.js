// let done = true

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Here is the thing I built'
//     resolve(workDone)
//     console.log(workDone)
//   } else {
//     const why = 'Still working on something else'
//     reject(why)
//     console.log(why)
//   }
// })


// promises example1

// const myPromise = new Promise((resolve,reject)=>{
//     let connection = false
//     if(connection){
//         resolve('connection established')
//     }
//     else{
//         reject('connection refused')
//     }
// });
// myPromise.then((message) => { 
//     console.log(message);
// }).catch((message) => { 
//     console.log(message);
// });

// example2
// var isMomHappy = true;

// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

// // call our promise
// var askMom = function () {
//     willIGetNewPhone
//         .then(function (fulfilled) {
//             // yay, you got a new phone
//             console.log(fulfilled);
//              // output: { brand: 'Samsung', color: 'black' }
//         })
//         .catch(function (error) {
//             // oops, mom didn't buy it
//             console.log(error.message);
//              // output: 'mom is not happy'
//         });
// };

// askMom();

// var askMom = function () {
//     console.log('before asking Mom'); // log before
//     willIGetNewPhone
//         .then(showOff)
//         .then(function (fulfilled) {
//             console.log(fulfilled);
//         })
//         .catch(function (error) {
//             console.log(error.message);
//         });
//     console.log('after asking mom'); // log after
// }
// askMom();

// const  myPromise = new Promise((resolve, reject) =>{
//     var a = 4;
//     var b = 8;
//     if(a==b){
//         resolve("equal hai");
//     }
//     else{
//     reject("not equal")
//     }
// });
// myPromise.then((result) =>{
// console.log(result);
// }).catch((err) =>{
// console.log(err);
// })

function add(){
    console.log("my function is")
}
function num_add(a,b, callback){
    console.log(a+b)
    callback()
}
num_add(10,12,add)
