const tinderUser = {} // non-singleton object

//const tinderUser = new Object() // singleton object
tinderUser.name = "siddhi"
tinderUser.id = 1432
tinderUser.isLoggedIn = false
//console.log(tinderUser)
const regularUser = {
    email: "user@123.com",
    fullname: {
        userFullname: {
            firstname: "siddhi",
            lastname: "lakhotia"
        }
    }

}
//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({}, obj1 , obj2, obj4)
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3)
const users = [
    {
        id: 1,
    email: "user@gmail.com"

    },
    {
        id: 1,
    email: "user@gmail.com"

    },
    
]
users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); // display only keys
// console.log(Object.values(tinderUser)); // display only values
// console.log(Object.entries(tinderUser)); // display both keys and values  
// console.log(tinderUser.hasOwnProperty('game'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
    //course.courseInstructor() // no problem with this syntax
    const {courseInstructor: instructor} = course
    console.log(instructor);

//     {
//            "name": "siddhi",
//            "coursename": "js in hindi",
//            "price": "free"
// }
// API called from JSON
// APIs in the form of object
 [
    {},
    {},
    {}
 ]
 // APIs in the form of ARRAY : JSON

    



