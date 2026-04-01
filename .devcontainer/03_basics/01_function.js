function sayMyName() {
    console.log("s");
    console.log("i");
    console.log("d");
    console.log("d");
    console.log("h");
    console.log("i");

}
//sayMyName()
function addTwoNumbers(number1, number2) {
    //let result = number1+number2
    //return result
    return number1+number2
}
//addTwoNumbers(5,6)
//addTwoNumbers(3,"4") // 4 acting as a string
//addTwoNumbers(3,null) //
const result = addTwoNumbers(5,3)
//console.log("Result: ",result)

function loginUserMessage(username) { //loginUserMessage(username = "sam") // will return sam 
    if(username === undefined) { // can also be written as !username 
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`

}
//console.log(loginUserMessage("Siddhi"));
//console.log(loginUserMessage()); // if no value is passed then it returns undefined


function calculateCartPrice(val1, val2, ...num1) { // -> used rest operator (...)
    return num1                       // will return values except the ones stored in val1 and val2
}
//console.log(calculateCartPrice(200,300,400,500));  
const user = {
    username: "siddhi",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
// handleObject ({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200,300,400,500]
function returnSecondValue (getArray) {
    return getArray[0]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500]))

