let string = "hello, ";
let boolean = true;
let number = 42;
let zero = 0;
let falseString = "";


console.log(string + boolean + number);
console.log("========================================");
console.log(number, "line 7");
console.log(String(number));
console.log(boolean, typeof boolean);
console.log(typeof [3,4,5]);
console.log("=========================================");

if(zero === 0) {
    console.log("Zero is false");
}
if(!zero) {
    console.log("Zero is true");
} else {
    console.log("Zero is flase");
}

if (falseString) {
    console.log("This string contains", flaseString);
} else {
    console.log("This string is empty")
}
console.log("==========================================");
console.log(!false);
console.log(Boolean(zero));
console.log(Boolean(!zero));
console.log("=================================================");

let helloWorld = "Hello, World!";

if (helloWorld.toLowerCase().includes("hello")) {
    console.log("Hello, Wrold! includes 'hello'")
} else {
    console.log("Hello, World! does not contain 'hello'");
}

let fruits = ['Apples', 'Bananas', 'Cherries'];

let abcString = `The ABC's of fruit are ${fruits.join(', ').toLowerCase()}`

let noMoreCherries = abcString.split(',');
noMoreCherries.pop();
noMoreCherries = noMoreCherries.join(', and').replace("C", "");
console.log(noMoreCherries);

console.log("=============================================");

const madLib = (str,arr) => {
    for(let i = 0; i < arr.length; i++) {
        let randInt = Math.floor(Math.random() * arr.length);

        str = str.replace('X', arr[randInt]);
        if(!str.includes('X')) {
            break;
        }
    }
    return str;
}
let sampleOne = "The X X fox jumped over the X X fence";
let arrayOne = ['quick', 'brown', 'tall', 'black', 'red', 'slow', 'stinky', 'nondescript'];
console.log(madLib(sampleOne, arrayOne))



//datatype checks

const addition = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)) {
        return "You have to enter a valid number!";
    }
    return num1 + num2;
}

console.log(addition(5, 7));
console.log(addition(5, 'seven'));
