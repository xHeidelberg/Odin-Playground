let i = 1;

//While Loop
while (i <= 5){
    console.log(`I'm counting the number is ${i}`);
    i++;
}

//While Loop Falsy
while (i){
    console.log(`What? i'm now in ${i}`);
    i--;
}

// do while loop
do{
    console.log(`do While: ${i}`);
    i++;
} while (i < 3);

// for loop (initialization(can be removed), condition, step)
//          (once, condition, every time)
for (; i <= 5; i++){
    console.log(`for loop: ${i}`);
    if(i===10) break;
}

let sampleFor = ["Apple", "Orange", "Pineapple", "Grapes", "Cucumber"];
for(let row = 0; row <= sampleFor.length; row++){
    let rowNumber = row + 1;
    console.log(rowNumber + ". " + sampleFor[row]);
}

//for (break/continue)

outer: for(let forOne = 0; forOne < 3; forOne++){
    for(let forTwo = 0; forTwo < 3; forTwo++){
        let input = console.log(`Value at Loop: ${forOne},${forTwo}`, ``); // change log to prompt

        if(!input) break outer;
    }
}
console.log("For Loop (Break/Continue) ---> Done!");

// ternary condition

function sampleTernary(ternars) {
    return ternars ? "True is the Result" : "False is the Result";
}

console.log(sampleTernary(true));
console.log(sampleTernary(false));
console.log(sampleTernary(null)); // null represent nothing or absence js treats this sa "False"
console.log(sampleTernary(NaN));    // NaN treats also like null

// Arrays

let sampleArray = ["One", "Two", "Three", "Four"];

// Find in array
function findInside(find){
    /*  
        input: "one"
        String(find) - force convert to string 
      "o"  charAt(0)    - Get the first character at index(0) 
      "O"  toUpperCase()- Convert the index(0) to UpperCase

       String(find).slice(1) - get until the end of the string
       toLowerCase()                - convert what it get to lowercase
    */
    return sampleArray.includes(String(find).charAt(0).toUpperCase() + String(find).slice(1).toLowerCase()) ? `Found the word: ${find}` : `Not in Array the word: ${find}`;
}

console.log(findInside("one"));

// access in array

getInsideArray = sampleArray[sampleArray.length - 1];
console.log(getInsideArray)

getInsideArray = sampleArray.at(-1);
do{
console.log(getInsideArray + "=========================");
}
while( 0 < sampleArray.length && sampleArray.length > 20){
    shiftArray = sampleArray.shift();
    console.log(shiftArray);
}

// methods pop/push, shift/unshift

let originalArray = ["Stack0"];
/*
console.log(originalArray); 

popping = originalArray.pop();
console.table(originalArray, popping);

pushing = originalArray.push("Stack5");
console.table(originalArray, pushing);

shifting = originalArray.shift();
console.table(originalArray, shifting);
*/
console.clear();









let unshiftAdd = originalArray.unshift("Stack-2", "Stack-1");
let pushAdd = originalArray.push("Stack1", "Stack2");

console.log(originalArray)

// array Methods

let arrayMethodSample = ["HereOne", "HereTwo", "HereThree", "HereFour"];

arrayMethodSample.splice(0, 2, "Two.1", "Two.2"); //splice remove
arrayMethodSample.splice(2, 0, "Two.3", "Two.4");//splice add
console.log(arrayMethodSample);

// Array methods and empty slots
const colorsNow = ["red", "yellow", "blue"];
colorsNow[6] = "Pink";

colorsNow.forEach((inside, indexing) => {
    console.log(`Index ${indexing}: ${String(inside).charAt(0).toUpperCase() + String(inside).slice(1).toLowerCase()}`);
});

console.log(colorsNow.reverse());


//Array Magic
let checkEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sumOfTripledEvens(checkEven){
    let sum = 0;
    
    for (let i = 0; i < checkEven.length; i++){

        if (checkEven[i] % 2 === 0){ // divisible by 2 (2, 4, 6, 8, 10)
            const final = checkEven[i] * 3; // every index times to 3
            // console.log(checkEven[i] * 3);
            sum += final; // add assign
        }

    }
    return sum; // return 90
}

console.log(sumOfTripledEvens(checkEven));

// Array | map() method

function plusOne(num){
    return num + 1;
}

const arr = [1, 2, 3, 4, 5];
const mappingArr = arr.map(plusOne);
console.log(`Original Array: ${arr}`)
console.log(`map() method: ${mappingArr}`);
console.log(`increment without changing the array value: ${arr}`)

//shorter version

const shorterMapped = arr.map(num => num + 1);
console.log(`Short version: ${shorterMapped}`);

// Array | filter() method

function isFilterNow(numCheck){
    return numCheck % 2 !== 0;
}

const oddFilter = arr.filter(isFilterNow);
console.log(oddFilter);
console.log(arr)

// short version
const shortFilter = arr.filter(numCheck => numCheck % 2 !== 0);
console.log(`Shortened Version of Filter: ${shortFilter}`);


// Array | reduce() method

const reduceArr = [1, 2, 3, 4, 5];
const prodOfAllIndex = reduceArr.reduce((reduceTotal, currentIndex) => 
    {return reduceTotal * currentIndex}, 1);

console.log(prodOfAllIndex);
console.log(reduceArr);

console.clear();
// Knowledge Check!! for filter, map and reduce

function sumAll(arraying){
    return arraying
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}


// Camelize using .split .map return as Join

const sample1 = "background-color"; // backgroundColor
const sample2 = "list-style-image"; // listStyleImage
const sample3 = "-webkit-transition"; // WebkitTransition
//const combineSample = ["background-color", "list-style-image", "-webkit-transition"];

function camelize(str){
    return str
    .split('-')
    .map(
        (word, index) => index == word[0] ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize(sample3));


function filterRange(arr, a, b){
    return arr.filter(insideItems => (a <= insideItems && insideItems <= b));
}

// Filter range "in place"
let arruy = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 3);

console.log(filtered);
console.log(arruy);

// Sort in decreasing order
let decreaseMe = arruy.sort((a, b) => b - a); // a - b sort increase
console.log(decreaseMe)

//  Copy and sort array

let copyArr = ["HTML", "CSS", "JavaScript"];

function copySorted(arr){
    return arr.slice().sort();
}

let sorted = copySorted(arr);
console.log(sorted);
console.log(copyArr);

// Loops and Array Continue


