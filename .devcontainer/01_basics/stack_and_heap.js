// Stack(Primitive) : In stack we get copy only
//  Heap(Non-Primitive) : In heap we get the reference, the actual changes are to be done in the original value
let myEmail = "siddhi@123.com"
let anotherName = myEmail
anotherName = "Siddhi Lakhotia"
//console.log(anotherName)
//console.log(myEmail)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "siddhi@google.com"
console.log(userTwo.email)
console.log(userOne.email)



