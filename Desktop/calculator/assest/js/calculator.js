    {    
    let op1 =parseFloat(prompt("Enter the first number:"));
    let op2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (+, -, *, /):")
    if (isNaN(op1) || isNaN(op2)) {
        alert("Error: Both inputs must be numbers.");
    }
        if (operation == "+") {
        result = op1 + op2;
    } else if (operation == "-") {
        result = op1 - op2;
    } else if (operation == "*") {
        result = op1 * op2;
    } else if (operation == "/") {
        result = op1 / op2;
    } else if(operation = "") {
        alert("Error: Unsupported operation. Please given the number ! "); 
    }else if (operation != "+,-,*,/"){
        alert("enter the given operator");
    }
    alert("The result is:" + result);
} 