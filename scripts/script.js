// JavaScript Document
var deHamburger = document.querySelector("h2");

function doeFormHeenEnWeer(){
	let hetMenu = document.querySelector("nav");
	hetMenu.classList.toggle("toonMenu");
}

deHamburger.addEventListener("click", doeFormHeenEnWeer);