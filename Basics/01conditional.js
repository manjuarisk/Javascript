// var whoAreYou = "teacher";

// if (whoAreYou === "user") {
//     console.log("Greeting Message!!");
// }
// else if(whoAreYou === "teacher") {
//   console.log("Greeting message to teacher!!!")  
// } else{
//     console.log("Message:login first");
// }

// var grade = 4;

// if (grade <= 10) {
//     console.log("Excellent!!!!!!");
    
// }
//  if (grade <= 5 ) {
//     console.log("very good!!!!");
// }
//   if(grade <= 3) {
//     console.log("GOOD!!!");
// }
//  if (grade === 0){
//     console.log("POOR");
// }
// else{
//     console.log("please enter grade");
// }

// conditions for accessing web courses

// this(!) sign represent reverse condition in boolean

// var isVerified = false
// var isLoggedIn = false
// var hasPaymentToken = true
// var isGuest = false

// if (isVerified && isLoggedIn && hasPaymentToken) {
//     console.log("Greeting to user");
//     console.log("Can access all the courses");
// }
// else if (isVerified || isGuest) {
//    console.log("Can read as a guest"); 
// } else {
//     console.log("Message: please provide exact detail");
// }

var iAmGlobal = 'Universal'

if (true) {
     iAmGlobal = 'only inside Block'
     var iAmLocal = 'surrender'
    console.log(iAmGlobal);
    console.log(iAmLocal);

}
console.log(iAmLocal);
console.log(iAmGlobal);