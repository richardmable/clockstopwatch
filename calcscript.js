//Written by Richard Mable
$(document).ready(function(){


	//function to square a number with argument num.  Pass aruments into this function
	//the "num" will be replace by whatever you put in
	//for example squareNum(2) turns "num" into 2 for that function (further down in the code)
	//you can have multiple arguments and pass multiple items into each function
	function squareNum(num){
		//creates a var with the result of the square. parseFloat becuase user may enter decimal numbers
		//also becuase this function is re-used in other calculation functions
		return parseFloat(num * num)
		//inserts text into div with solution
		// 
	}
	//on click, square button runs anoymous function to check input and run calculation
	$("#square-button").click(function(){
	//creates var input, gets input from square button box, checks value, turns into integer
	var squareInput = parseFloat($("#square-input").val());
	//passes input var into sqaureNum function argument, replacing num with input
	var squareResult = squareNum(squareInput);
	$("#squareSolution").text("The square of " + squareInput + " is " + squareResult);
	});

	//function to half a number.  the function is then assigned to a var later.  This avoid creating
	//many many variables (using the return function)
	function halfNum(num){
		return num / 2;
	}

	//on click, half button will run halfNum and return result to be place in doc
	$("#half-button").click(function(){
	//need to conver to float with parseFloat otherwise cannot divide fractions
		var halfInput = parseFloat($("#half-input").val());
		//creates a var that passes halfInput into halfNum function and halfNum returns the result
		var halfResult = halfNum(halfInput);
		//prints solution to document
		$("#halfSolution").text("Half of " + halfInput + " is " + halfResult);
	});


	//function to caculate percent of a number via i.e. input 3/ input 9 = 33%, parseFloat for decimcal
	//to fixed to set amount of decimal points after calculation is performed.
	function percentNum (num1, num2) {
		return parseFloat((num1 / num2) * 100).toFixed(2);
	}

	//on click, percent-button will run percentNum, return result and print result to page
	$("#percent-button").click(function(){
		var percent1Input = parseInt($("#percent1-input").val());
		var percent2Input = parseInt($("#percent2-input").val());
		var percentResult = percentNum(percent1Input, percent2Input);
		$("#percentResultText").text(percent1Input + " is " + percentResult + "% of " + percent2Input + ".");
		});
		
	//function to calculate area of a circle with radius n (A=pi*r^2, in case you forgot...)
	//pass radius into squareNum function to resuse the squareNum function. Radius is user defined.
	function circleArea (radius) {
		return parseFloat((squareNum(radius) * Math.PI)).toFixed(2);
		}	
		
	//on click, area-button will calculate area of circle with radius n, and print result to page
	//there is a bug in squareNum, also squareNum needs to be re-written to not print to page
	$("#area-button").click(function() {
		var radiusInput = parseFloat($("#area-input").val());
		var areaResult = circleArea(radiusInput);
		$("#circleAreaResult").text("The area of a cicle with radius " + radiusInput + " is " + areaResult + ".")
	});	
	
//for circle use Math.PI fucntion in the jQuery math library
//also can reuse square function, no need to write it again
//then figure out how to bind keys so that mouse in not needed, i.e. enter performs the function


});