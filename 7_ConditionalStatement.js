// Check Driving Condition

let age = 18;

if (age > 18) {
    console.log("You Can Drive : ", age);
} 
else {
    console.log("You Can't Drive :", age);
}

//  Check Number is Positive Negative or Neutral

let number = 10;

if (number > 0) {
    console.log("Number is Positive ", number);
}
else if (number < 0) {
    console.log("Number is Negative ", number);
}
else if (number == 0) {
    console.log("Number is Neutral ", number);
}

// Check Number is Even or Odd  Using Temperary Operator
no1 = 44;
no1 % 2 == 0 ? console.log("Number is Even") : console.log("Number is Odd");


// Switch Case in Conditional Statements
a=100;
b=50;
key='*';
switch (key) {
    case '+':
        console.log(a + b);
        break;

    case '-':
        console.log(a - b);
        break;

    case '*':
        console.log(a * b);
        break;

    case '/':
        console.log(a / b);
        break;

    default:
        console.log("Wrong operator");

        break;
}