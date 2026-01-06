// Sample 1
function add7(num) {
    return num + 7;
}

console.log(add7(10));

// Sample 2
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(3, 2));

// Sample 3 first letter capitalized
function capitalize(getMe) {
    if (getMe.length === 0) return getMe;
    return getMe.charAt(0).toUpperCase() + getMe.slice(1).toLowerCase();
}

console.log(capitalize("HELLO WORLD"));
console.log(capitalize("javaScript"));
console.log(capitalize("WHATkjsdkja is yo"));

// Sample 4 last of string
function lastLetter(getLast) {
    if (getLast.length === 0) return "";
    return getLast.charAt(getLast.length - 1);
}


console.log(lastLetter("------------------>o"));
console.log(lastLetter("===================================================>?>!@#>>>>>G"));

// Sample 6
/*
    write a program that takes a user’s input and prints the numbers from one to the number the user entered.
    However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz.
    For numbers which are multiples of both three and five print FizzBuzz.

*/

let whenClick = document.getElementById("clickSix");
whenClick.addEventListener('click', FizzBuzz);

function FizzBuzz(){
    let whatInput = document.getElementById("inputSix");
    let nowInput = parseInt(whatInput.value);

    for (let i = 1; i <= nowInput; i++){
        if (i % 3 === 0 && i % 5 === 0) // FizzBuzz
            console.log("FizzBuzz");
        else if (i % 5 === 0) // Buzz
            console.log("Buzz");
        else if (i % 3 === 0) // Fizz
            console.log("Fizz");
        else
            console.log(i); //
    }
}