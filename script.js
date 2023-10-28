var userInput = prompt("What you want to do?\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.Remainder");
 switch(userInput){
    case "1":
        var number1 = parseFloat(prompt("Enter First Number: "));
        var number2 = parseFloat(prompt("Enter Second Number: "));

        var addition = parseFloat(number1 + number2).toFixed(2);

        document.write("Addition of two number is: " + addition);
        break;

    case "2":
        var number1 = parseFloat(prompt("Enter First Number: "));
        var number2 = parseFloat(prompt("Enter Second Number: "));       
        var subtraction = parseFloat(number1-number2).toFixed(2);
        document.write("Subtraction of two number is: "+subtraction);
        break;
    
    case "3":
        var number1 = parseFloat(prompt("Enter First Number: "));
        var number2 = parseFloat(prompt("Enter Second Number: "));
        var multiplication = parseFloat(number1*number2).toFixed(2);
        document.write("Multiplication of two number is: "+multiplication);
        break;

    case "4":
        var number1 = parseFloat(prompt("Enter First Number: "));
        var number2 = parseFloat(prompt("Enter Second Number: "));
        var divition = parseFloat(number1/number2).toFixed(2);
        document.write("Division of two number is: "+divition);
        break;

    case "5":
        var number1 = parseFloat(prompt("Enter First Number: "));
        var number2 = parseFloat(prompt("Enter Second Number: "));
        var remainder = parseFloat(number%number2).toFixed(2);
        document.write("Remainder of two number is: "+remainder);
        
    default:
        document.write("Invalid Character!");
        
}
