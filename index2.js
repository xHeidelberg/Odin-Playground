const colorSelect = document.querySelector("#background");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor)
{
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

colorSelect.addEventListener("change", () => colorElse(),
);


function colorElse()
{
    switch(colorSelect.value)
    {
        case "white":
            update("white", "black");
            break;
        case "black":
            update("black", "white");
            break;
        case "red":
            update("red", "blue");
            break;
        case "blue":
            update("blue", "red");
            break;
        default:
            update("", "")
            break;
    }
}