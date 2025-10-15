// Sample 1
let strong = document.querySelector('strong');
let input = document.querySelector('#inputOne');
let button = document.querySelector('#clickingOne');
button.addEventListener('click', onClick);

function inputInOne() {
    return input.value;
}

function onClick() {
    const blank = input.value;
    if (blank != "" && blank != null) {
        strong.textContent = blank;
        return;
    }
    else {
        strong.textContent = "Change";
        return;
    }
}

// Sample 2 - Alert with Click Counter not Saved

let announceInput = document.querySelector('#sample2Input');
let buttonTwo = document.querySelector('#announceBtn');
buttonTwo.addEventListener('click', onClickAnnounce);
let resultTwo = document.querySelector('#samp2Result');
let span = document.querySelector('span');
let a = 0;


function spanTwo() {
    span.textContent = `${a++}`;
    return;
}

function onClickAnnounce() {
    const blank2Check = announceInput.value;
    if (blank2Check === null || blank2Check === "") {
        resultTwo.textContent = "Can\'t be Empty."
        spanTwo();
        return;
    }
    resultTwo.textContent = ""
    alert(`Announcement: ${blank2Check}`);
    span.textContent = `${a++}`;
    return;
}

// Sample 3

let buttonThree = document.getElementById('threeBtn');
buttonThree.addEventListener('click', what);

function what() {
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
        return;
    }

    function showOk() {
        alert("Okay, you agree.");
        return;
    }

    function showCancel() {
        alert('Okay, you disagree.');
        return;
    }

    ask("Do you Agree?", showOk, showCancel);
}

// Sample 4
let fourButton = document.getElementById('fourBtn');
fourButton.addEventListener('click', fourClick);

function fourClick()
{
    let pass = prompt("Please Enter your PIN:");
    let passConvert = parseInt(pass);
    let feedbackFour;

    //console.log(typeof pass)
    if (passConvert === 1234)
    {
        feedbackFour = function()
        {
            alert("Correct Password!");
        };
        feedbackFour();
    }
    else
    {
        feedbackFour = function()
        {
            alert("Incorrect Password!");
        };
        feedbackFour();
    }
    return;
}
