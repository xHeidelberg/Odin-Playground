// Day 3

let inOne = document.querySelector('#i1');
let inTwo = document.querySelector('#i2');
let result = document.querySelector('#result');
let button = document.querySelector('button');
button.addEventListener('click', onClick);

function onClick()
{
    // true
    if(inOne.value === "" || inTwo.value === "")
    {
        result.textContent = 'Can\'t be Empty';
        return;
    }
    calculateNow();
}
function calculateNow()
{
    let num1 = inputNum1();
    let num2 = inputNum2();
    let sum = num1 + num2;
    result.textContent = `Result: ${sum}`;
}


// input element
function inputNum1()
{
    return parseInt(inOne.value);
}

function inputNum2()
{
    return parseInt(inTwo.value);
}
