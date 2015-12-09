$(document).ready(function() {


	setInterval(function() {
		//Date.now gets the current date in ms and creates a string
		//you cannot run functions on a string
		//use .getHours on a new function to get hours
		//thus we use new Date() and set it to var date
		var date = new Date();
			//set vars to getHours, etc
			var hours = date.getHours();
			//check if hours is above 12
			//subtract 12 if hours is above 12
				if (hours > 12){
					var hours = (hours - 12)
				}
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			//change hours, mins, seconds to strings
			var hours = hours.toString();
			var minutes = minutes.toString();
			var seconds = seconds.toString();
			//if value of getHours == 1, insert a 0 before integer, etc
			//do not need to place a zero before hours in 12hr time
			// if (hours.length == 1){
			// 	var hours = "0" + hours;
			// };
			if (minutes.length == 1){
				var minutes = "0" + minutes;
			};
			if (seconds.length == 1){
				var seconds = "0" + seconds;
			};

			//if value of gethours != 2, insert a zero before hour
			
			//if 

		$("#hour").text(hours);
		$("#minute").text(minutes);
		$("#second").text(seconds);
		$("#millisecond").text(date.getMilliseconds());

	}, 1000)

});