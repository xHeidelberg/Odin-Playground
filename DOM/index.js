function sum(a, b, c) {
    return a + b + c;
}

const number = [2, 3, 5];

console.log(sum(...number));



// DOM Alter

const base = document.querySelector("#divTwo");
base.style.cssText = "color: red; background: black;";

base.setAttribute("divOne", "id");

base.getAttribute("divOne");

base.removeAttribute("divOne");

// Class

const baseContainer = document.querySelector("#container");
baseContainer.classList.add("SampleCLASSADD");
baseContainer.classList.remove("SampleCLASSADD");
baseContainer.classList.toggle("active");

// id
document.getElementById("clicker").onclick = function theEvent() {
    const needToChange = document.querySelector("#imHidden");
    needToChange.style.cssText = "visibility: true; font-weight: bolder; color: red;";
}
// onclick DOM

function clickMeDOM() {
    //demoCLICK is in Style
    document.getElementById("afterClick").setAttribute("id", "demoCLICK");
}

// Add and remove

document.getElementById('clickerForInner').onclick = function addAndRemove() {
    const innerBase = document.getElementById('innerHTMLsample');
    //document.getElementById('innerToRemove').innerHTML = "";
    const removeNow = document.getElementById('innerToRemove');
    if (removeNow) { // if true remove else no action 
        innerBase.removeChild(removeNow);
    }

    const contentInner = document.createElement("p");
    contentInner.innerHTML = 'Now I\'m HERE!';
    contentInner.style.cssText = "font-style: bolder; font-size: 50px; color: blue;";
    document.getElementById('innerHTMLsample').appendChild(contentInner);

    //contentInner.innerHTML = "<span style=\"font-style: bolder; font-size: 50px; color: blue;\">Now I\'m HERE!!</span>";
}

// Exercise for DOM
const main = document.querySelector('#exercise');

const redParagraph = document.createElement('p');
redParagraph.style.color = 'red';
redParagraph.textContent = "Hey I\’m red!";
main.appendChild(redParagraph);

const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = "I\'m a blue h3!";
main.appendChild(blueHeader);

const divisionInside = document.createElement('div');
divisionInside.style.cssText = "border: 2px solid black; background-color: pink;"
main.appendChild(divisionInside);

const divH1 = document.createElement('h1');
divH1.textContent = "I\'m in a div";
divisionInside.appendChild(divH1);

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";
divisionInside.appendChild(divPara);

main.appendChild(divisionInside);

// Event DOM

const eventBtn = document.querySelector('#btnAlert');
eventBtn.onclick = () => alert("Sample Alert");

const btnMethod3 = document.querySelector('#btnAlertMethod3');

btnMethod3.addEventListener("click", function (e) {
    e.target.style.cssText = "padding: 10px 15px; color: blue;";
})

// ==================
const mySampleArrrrr = ['A', 'AB', 'ABC', 'ABCD'];
console.log(mySampleArrrrr.map((Passed) => Passed.valueOf(Passed)));



const allInOne = document.querySelectorAll('#containerRizzz button');

allInOne.forEach(
    (button) => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    }
);


// another btn
const anthrBtn = document.querySelector('#anotherBtn');

anthrBtn.addEventListener('click', () => {
    console.log(type);
});

// Mouse Event