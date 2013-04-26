
function calculator(a, operand1, operand2){
	switch(a) {
		case "1":
		return operand1 + operand2;
		break;
		case "2":
		return operand1 - operand2;
		break;
		case "3":
		return operand1 * operand2;
		break;
		case "4":
		return operand1 / operand2;
		break;				
		case "5":
		return operand1 % operand2;
		
	};

};



var operator = prompt("Please select which operation you want to do with a number: 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division, and 5 for modulus");
var operand1 = parseInt( prompt("Give me the first number"), 10);
var operand2 = parseInt( prompt("Give me the second number"), 10);


document.write(calculator(operator, operand1, operand2));
	




// document.write(triangleArea(triangle.sideA, triangle.sideB, triangle.sideC));


	