const selectWeather = document.querySelector('#weather');
const out = document.querySelector('#output');


selectWeather.addEventListener("change", setWeather);

function setWeather()
{
    const choice = selectWeather.value;
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
