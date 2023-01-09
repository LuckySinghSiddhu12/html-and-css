console.log("This is tutorial 53");

function greet(name1 ,greetText){
console.log(greetText + ' '+ name1);
console.log(name1 + ' is a good boy');
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
}



let name1 = "siddhu";
let name2 = "preet";
let name3 = "meet";
let name4 = "abc";
let greetText = "Good Morning";


greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
//let returnVal = greet(name3);
//console.log(returnVal);

let returnVal = sum(1,2,3);
console.log(returnVal);
//console.log(name1 + ' is a good boy');
//console.log(name2 + ' is a good boy');
//console.log(name3 + ' is a good boy');
//console.log(name4 + ' is a good boy');