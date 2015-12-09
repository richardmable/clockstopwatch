$(document).ready(function(){

	//function to reset all vars to zero and place in document
	function reset (){
		var milliseconds = "0" + 0;
		var seconds = "0" + 0;
		var minutes = "0" + 0;
		var hours = "0" + 0;
		$("#seconds").text(seconds);
		$("#minutes").text(minutes);
		$("#hours").text(hours);
		$("#milliseconds").text(milliseconds);
	}
	
	// function to count up seconds
	function secondsCount(){
		seconds++;
	}

	setInterval(secondsCount(){
		$("#seconds").text(seconds);
	}, 1000);

	// link reset function to reset button
	$("#reset").click(reset);



	});


//page loads, set clock to zero with function reset, setting all var to zero
//on click of start, function "start" executes, starting timer
//each parameter has to count up
//on click of stop, timer stops
//on click of reset, timer resets
//set clock to zero and timer reset are tied together

