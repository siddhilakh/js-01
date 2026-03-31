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
console.log(loginUserMessage()); // if no value is passed then it returns undefined
