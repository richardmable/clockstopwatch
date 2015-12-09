$(document).ready(function(){

	//function to reset all vars to zero and place in document
	//"strseconds" etc is for putting into doc
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
	// link reset function to reset button
		$("#reset").click(reset);
		// setInterval()




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

