$(document).ready(function(){

	setInterval(function(){
		//gets the date and stores to var date to get seperate hours, mins, seconds with var clock array
		var date = new Date();
		//creates an array with name "clock" where to get each hour, min, and second
		var clock = [date.getHours(), date.getMinutes(), date.getSeconds()]
		//checks if hours are greater than 12 then converts to 12 hour format
		//also puts 0's in front of single digit numbers
		if (clock[0] > 12){
			clock[0] = (clock[0] - 12)
		}if (clock[1] < 10){
			clock[1] = ("0" + clock[1].toString())
		}if (clock[2] < 10){
			clock[2] = ("0" + clock[2].toString())
		}
		$("#hour").text(clock[0])
		$("#minute").text(clock[1])
		$("#second").text(clock[2])
	}, 1000);


});