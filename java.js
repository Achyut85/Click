document.querySelector(".btn").addEventListener("click", swi);
var c = true;
function swi() {
    if (!c) {
        document.querySelector("img").setAttribute("src", "./bulb_off.jpg"); document.querySelector(".btn").innerHTML = "ON";
        c = true;
    }
    else {
        document.querySelector("img").setAttribute("src", "./bulb_on.jpg"); document.querySelector(".btn").innerHTML = "OFF"; 
        c = false;

    }
}