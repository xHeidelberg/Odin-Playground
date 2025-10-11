const select = document.querySelector('#weather');
const out = document.querySelector('#output');


select.addEventListener("change", setWeather);

function setWeather()
{
    const choice = select.value;
    switch(choice)
    {
        case "sunny":
            out.textContent = "Yes, it's Sunny";
            break;
        case "rainy":
            out.textContent = "No!, why it's Raining";
            break;
        case "snowing":
            out.textContent = "So Cold!, it's Snowing";
            break;
        case "overcase":
            out.textContent = "OVERCAST!!";
            break;
        default:
            out.textContent = "";
            break;
    }
}
