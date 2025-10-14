let strong = document.querySelector('strong');
let input = document.querySelector('#inputOne');
let button = document.querySelector('#clicking');
button.addEventListener('click', onClick);

function inputInOne()
{
    return input.value;
}

function onClick()
{
    const blank = input.value;
    if (blank != "" && blank != null)
    {
        strong.textContent = blank;
        return;
    }
    else
    {
        strong.textContent = "Change";
        return;
    }
}


