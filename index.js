let timer = null;
let starttime = 0;
let time_current = 0;
let isRunning = false;
let displayTimer = document.getElementById("timer");


function start(){
	if (!isRunning){
		starttime = Date.now() - time_current;
		timer = setInterval(display, 10);
		isRunning = true;
	}
}

function stop(){
		clearInterval(timer);
		if (isRunning)
			time_current = Date.now() - starttime;
		isRunning = false;
}

function reset(){
		clearInterval(timer);
		starttime = 0;
		time_current = 0;
		displayTimer.textContent = "00:00:00:00";
		isRunning = false;
}

function display(){
	const current = Date.now();
	time_current = current - starttime;

	let hours = Math.floor(time_current / (1000 * 60 * 60));
	let minutes = Math.floor(time_current / (1000 * 60) % 60);
	let seconds = Math.floor(time_current / (1000) % 60);
	let milliseconds = Math.floor(time_current % 1000 / 10);

	hours = String(hours).padStart(2, "0");
	minutes = String(minutes).padStart(2, "0");
	seconds = String(seconds).padStart(2, "0");
	milliseconds = String(milliseconds).padStart(2, "0");

	displayTimer.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}


