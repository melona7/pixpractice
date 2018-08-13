// pix.js file


// general
var body = document.querySelector("body");
var close = document.querySelectorAll(".close");

// start variables
var start = document.querySelector(".start");
var overlay = document.querySelector(".overlay");

// icon variables
var music = document.querySelector("#music");
var write = document.querySelector("#writing");
var draw = document.querySelector("#draw");
var heart = document.querySelector("#heart");

// windowOne variables
var windowOne = document.querySelector(".right-top");
var wone = document.querySelector("#wone");
// from soundcloud
var player = document.querySelector("#music-player");
var widgetIframe = document.querySelector("#sc");
var widget1 = SC.Widget(widgetIframe);
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");

// windowTwo variables
var windowTwo = document.querySelector(".right-bottom");
var wtwo = document.querySelector("#wtwo");
var typeNow = document.querySelector("#type-now");
var typev = document.querySelector("#type-visibility");
var yes = document.querySelector("#yes");

// windowThree
var windowThree = document.querySelector(".left-bottom");
var input = document.querySelector("#user-input");
var submit = document.querySelector("#submit");
var colours = ['"the colour of a dream"', '"the colour of where we part"', '"a monsoon"', 
'"sand dunes in the sun"', '"the colour of an afternoon"', '"a thousand suns"'];
var response = document.querySelector("#response");
var wthree = document.querySelector("#wthree");

// windowFour
var windowFour = document.querySelector(".left-top");
var wfour = document.querySelector("#wfour");
var readme = document.querySelector("#readme");
var creds = document.querySelector(".credits");
var astro = document.querySelector("#astro");
 


// add closing hover animation
function addClose() {
	this.classList.add("close-me");
}

function removeClose() {
	this.classList.remove("close-me");
}

for (var i = 0; i < close.length; i++) {
	close[i].addEventListener("mouseenter", addClose);
	close[i].addEventListener("mouseleave", removeClose);
}

// start button animate
function addHover() {
	start.classList.add("start-hover");
}
start.addEventListener("mouseenter", addHover);
start.addEventListener("mouseleave", function(){
	start.classList.remove("start-hover");
});
// start button click
start.addEventListener("click", function(){

	start.classList.add("fadeaway");
	start.classList.remove("start-blink");
	overlay.classList.add("begin");

	// music button
	music.classList.add("lets-play");
	music.classList.add("todo-reg");
	music.innerHTML = '<i class="fas fa-play"></i>';

	// write button
	write.classList.add("lets-write");
	write.classList.add("todo-reg");
	write.innerHTML = '<i class="fas fa-pen"></i>';

	// draw button
	draw.classList.add("lets-paint");
	draw.classList.add("todo-reg");
	draw.innerHTML = '<i class="fas fa-magic"></i>';

	// heart button
	heart.classList.add("lets-love");
	heart.classList.add("todo-reg");
	heart.innerHTML = '<i class="fas fa-heart"></i>';

	// remove animation events
	start.removeEventListener("mouseenter", addHover);
});


// music button animation
music.addEventListener("mouseenter", function(){
	music.classList.add("todo-hover");
	music.classList.remove("todo-reg");
});
music.addEventListener("mouseleave", function(){
	music.classList.add("todo-reg");
	music.classList.remove("todo-hover");
});

// music clicked open
music.addEventListener("click", function() {
	windowOne.classList.remove("window-close");
	
	// play and pause sc
	play.addEventListener("click", function(){
		widget1.play();
	});

	pause.addEventListener("click", function(){
		widget1.pause();
	});

	// play and pause animate
	play.addEventListener("mouseenter", function () {
		player.classList.add("music-press")
	});

	play.addEventListener("mouseleave", function(){
		player.classList.remove("music-press");
	});

	pause.addEventListener("mouseenter", function () {
		player.classList.add("music-press")
	});

	pause.addEventListener("mouseleave", function(){
		player.classList.remove("music-press");
	});

	// music window close
	wone.addEventListener("click", function(){
		windowOne.classList.add("window-close");
	});
});


// write button amination
write.addEventListener("mouseenter", function(){
	write.classList.add("todo-hover");
	write.classList.remove("todo-reg");
});
write.addEventListener("mouseleave", function(){
	write.classList.add("todo-reg");
	write.classList.remove("todo-hover");
});

// write window opened
write.addEventListener("click", function() {
	windowTwo.classList.remove("window-close");

	// yes button animate
	yes.addEventListener("mouseenter", function(){
		yes.classList.add("start-hover");
	});
	yes.addEventListener("mouseleave", function(){
		yes.classList.remove("start-hover");
	});

	// button click
	yes.addEventListener("click", function(){
		// typing animation
		typeNow.classList.add("type");
		typev.classList.remove("type-visible");

		// wait
		setTimeout((function() {
			// body animation day to night
			body.classList.add("night");
			body.classList.remove("day");
		}), 4000);
	});

	wtwo.addEventListener("click", function(){
		windowTwo.classList.add("window-close");
		typeNow.classList.remove("type");
		typev.classList.add("type-visible");
	});
});


draw.addEventListener("mouseenter", function(){
		draw.classList.add("todo-hover");
		draw.classList.remove("todo-reg");
});
draw.addEventListener("mouseleave", function(){
		draw.classList.add("todo-reg");
		draw.classList.remove("todo-hover");
});

draw.addEventListener("click", function() {
	windowThree.classList.remove("window-close");

	// colour button animate
	submit.addEventListener("mouseenter", function(){
		submit.classList.add("start-hover");
	});
	submit.addEventListener("mouseleave", function(){
		submit.classList.remove("start-hover");
	});

	submit.addEventListener("click", function() {
		// background is the input value
		windowThree.style.background = input.value;

		// random num for array of colours
		var int = Math.floor(Math.random() * ((colours.length-1) - 0 + 1)) + 0;
		response.innerHTML = colours[int];
		response.classList.add("respond-in");

		// time for fade
		setTimeout((function() {
			response.classList.remove("respond-in");
		}), 2000);

	});

	// close window 3
	wthree.addEventListener("click", function(){
		windowThree.classList.add("window-close");
		windowThree.style.background = '#735ca3';
	});
});

// heart animations
heart.addEventListener("mouseenter", function(){
		heart.classList.add("todo-hover");
		heart.classList.remove("todo-reg");
});
heart.addEventListener("mouseleave", function(){
		heart.classList.add("todo-reg");
		heart.classList.remove("todo-hover");
});

// if click heart
heart.addEventListener("click", function() {
	windowFour.classList.remove("window-close");

	// readme button animate
	readme.addEventListener("mouseenter", function(){
		readme.classList.add("start-hover");
	});
	readme.addEventListener("mouseleave", function(){
		readme.classList.remove("start-hover");
	});

	// animation for when clicked
	readme.addEventListener("click", function(){
		readme.classList.add("read-fade");
		setTimeout((function() {
			readme.classList.add("read-spin");
		}), 2000);
		setTimeout((function() {
			creds.classList.add("end");
		}), 4000);
		
		setTimeout((function() {
			astro.innerHTML = '<i class="fas fa-user-astronaut"></i>';
			astro.classList.add("so-long");
		}), 4000);

	});

	// close window 4
	wfour.addEventListener("click", function(){
		windowFour.classList.add("window-close");
		readme.classList.remove("read-fade");
		readme.classList.remove("read-spin");
		creds.classList.remove("end");
		astro.classList.remove("so-long");
		astro.innerHTML = "";
	});

})





