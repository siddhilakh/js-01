//var c = 300 // var cannot be used here ; it will take the value of c = 30 and not c = 300 
let a = 200
if(true) {           //  this
    let a = 10       //   is
    const b = 20     //  block
    //console.log("INNER: ",a);   //  scope
          
}                    //
//console.log(a)
//console.log(b);
//console.log(c);
// NOTE: Global scope of google inspection differs from that of used in vs code by writing "node" in the terminal



function one() {
    const username = "siddhi"

    function two() {
        const website = "LinkedIn"
        console.log(username)

    }
    //console.log(website);
    two()
    
}
//one()

if (true) {
    const username = "siddhi"
    if (username === "siddhi") {
        const website = " LinkedIn"
        //console.log(username + website); 
    }
    //console.log(website); // not in its scope
    
}
//console.log(username); // not in its scope

console.log(addOne(5))

function addOne(num) { // here function can be accessed before its declaration
    return num + 1
}

addTwo(5)
                               // in this way function cannot be accessed before its declaration 
const addTwo = function(num) { // because it is declared in the form of variable
    return num + 2
}






