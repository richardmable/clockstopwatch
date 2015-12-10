$(document).ready(function(){

	//function to reset all vars to zero and place in document
	//"strseconds" etc is for putting into doc as the vars become strings with init 0's added
	//"seconds" etc are vars that stay as numbers for calculations
	function reset (){
		var strmilliseconds = "00" + 0;
		var strseconds = "0" + 0;
		var strminutes = "0" + 0;
		var strhours = "0" + 0;
		var milliseconds = 0;
		var seconds = 0;
		var minutes = 0;
		var hours = 0;
		$("#seconds").text(strseconds);
		$("#minutes").text(strminutes);
		$("#hours").text(strhours);
		$("#milliseconds").text(strmilliseconds);
	}
	//a way to make reset run once page is intially loaded

	// link reset function to reset button
	$("#reset").click(reset);


	//function to count up and add seconds and minutes in correct order, display them to page
	//12/9 11:30PM: this is "working" aka displaying spanid+seconds every 100 ms in console when start clicked
	function counter(){
		milliseconds + 100;
		if (milliseconds == 1000) {
			milliseconds = 0;
			seconds + 1;
		}else if(seconds == 60) {
			seconds = 0;
			minutes + 1;
		}else if(minutes == 60){
			minutes = 0;
			hours + 1;
		}else {
			console.log(milliseconds);
		}
	};
		
	
	//creates a loop telling counter to run every 1/10 of a second until stop button is clicked
	//intiates upon start button being clicked, use for loops to check for stop button
	$("#start").click(setInterval(counter, 100));
	//this is where text output to HTML needs to go
		//run until stop button clicked

	});


//page loads, set clock to zero with function reset, setting all var to zero
//on click of start, function "start" executes, starting timer
//each parameter has to count up
//on click of stop, timer stops
//on click of reset, timer resets
//set clock to zero and timer reset are tied together

//wrap everything in setInterval, use if statements
//create a loop to check if start or stop is paused
//in setInterval, put a boolen function that will stop the loop from running
//same idea to start again

// // function to count up seconds
// function secondsCount(){
// 	var seconds = seconds + 1;
// }

// setInterval(secondsCount(){
// 	$("#seconds").text(seconds);
// }, 1000);

// 

