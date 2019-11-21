import '../styles/index.scss';

console.log('webpack starterkit');

function turnOnEvent() {
    const element = document.getElementsByTagName("b")[0];
    element.innerHTML = "ON";
    element.style.color = "black";
    const header = document.getElementsByTagName("h1");
    header.forEach(element => {
        element.style.color = "black";
    });
    const icon = document.getElementsByTagName("i");
    icon.forEach(element => {
        element.style.color = "#ffeb3b";
    });
    const body = document.getElementsByTagName("body");
    body.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function turnOffEvent() {
    const element = document.getElementsByTagName("b")[0];
    element.innerHTML = "OFF";
    element.style.color = "white";
    const header = document.getElementsByTagName("h1");
    header.forEach(element => {
        element.style.color = "white";
    });
    const icon = document.getElementsByTagName("i");
    icon.forEach(element => {
        element.style.color = "white";
    });
    const body = document.getElementsByTagName("body");
    body.forEach(element => {
        element.style.backgroundColor = "grey";
    });
}


window.turnOnEvent = turnOnEvent;
window.turnOffEvent = turnOffEvent;