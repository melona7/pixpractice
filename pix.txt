
var start = document.querySelector(".start");
start.addEventListener("mouseenter", function(){
		start.classList.add("start-hover");
});
start.addEventListener("mouseleave", function(){
	start.classList.remove("start-hover");
});

var overlay = document.querySelector(".overlay");
var music = document.querySelector("#music");
var write = document.querySelector("#writing");
var draw = document.querySelector("#draw");
var heart = document.querySelector("#heart");
start.addEventListener("click", function(){
	start.classList.add("fadeaway");
	start.classList.remove("start-blink");
	overlay.classList.add("begin");
	music.classList.add("lets-play");
	music.innerHTML = '<i class="fas fa-play"></i>';

	write.classList.add("lets-write");
	write.innerHTML = '<i class="fas fa-pen"></i>';

	draw.classList.add("lets-paint");
	draw.innerHTML = '<i class="fas fa-magic"></i>';

	heart.classList.add("lets-love");
	heart.innerHTML = '<i class="fas fa-heart"></i>';

});

