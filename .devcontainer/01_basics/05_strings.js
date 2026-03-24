const name = "siddhi"
const repoCount = 50
//console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)
const gameName = new String('si-dd-hi')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('d'));
const newString = gameName.substring(0, 4) // (while wrting substring - starting index is included and ending index is excluded)
//console.log(newString)
const anotherString = gameName.slice(-3, 6)
//console.log(anotherString);
// negative values can only be given in slice and not substring
const newStringOne = "  siddhi  "
//console.log(newStringOne)
//console.log(newStringOne.trim())
const url = "https/:siddhi.com/siddhi%20lakh"
//console.log(url.replace('%20','-'))
console.log(url.includes('siddhi'))
console.log(gameName.split('-'))
