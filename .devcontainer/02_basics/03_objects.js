// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Siddhi",
    [mySym]: "mykey1",      // mySym -> normal behaves like a string ; [mySym] -> key behaves like a symbol
    "full_name": "Siddhi Lakhotia" ,
    age: 18,
    location: "Indore",
    email: "siddhi@123.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
    
}
// console.log(JsUser.age)
// console.log(JsUser["email"])
// console.log(JsUser["full_name"])
// console.log(JsUser[mySym])

JsUser.email = "siddhilakh@123.com"
//Object.freeze(JsUser)
JsUser.email = "siddhi@chatgpt.com"
//console.log(JsUser)
JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())