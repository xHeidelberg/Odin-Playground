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

// Sample 3
function capitalize(getMe) {
    if (getMe.length === 0) return getMe;
    return getMe.charAt(0).toUpperCase() + getMe.slice(1).toLowerCase();
}

console.log(capitalize("HELLO WORLD"));
console.log(capitalize("javaScript"));
console.log(capitalize("WHATkjsdkja is yo"));

// Sample 4
function lastLetter(getLast) {
    if (getLast.length === 0) return "";
    return getLast.charAt(getLast.length - 1);
}


console.log(lastLetter("------------------>o"));
console.log(lastLetter("===================================================>?>!@#>>>>>G"));