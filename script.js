var body = document.querySelector("body");
var titel = document.querySelector("h1");
var color = document.querySelector("input");

var bodykleuren;
var titelkleuren;

function bodykleur() {
    bodykleuren = color.value;
}

function titelkleur() {
    titelkleuren = color.value;
}

function veranderkleur() {
    body.style.backgroundColor = bodykleuren;
    titel.style.color = titelkleuren;
}