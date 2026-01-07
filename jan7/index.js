let i = 1;

//While Loop
while (i <= 10){
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
for (; i <= 10; i++){
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

sampleArray[3] = "Five";

console.log(sampleArray.length)