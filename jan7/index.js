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