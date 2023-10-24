console.log("Welcome to Solve JavaScript Practice Set 2 Now");

//  1.Use Logcal Operator  to find whether the age of person is lies between 10 to 20.

let age=20;

if (age<20 && age>10) {
    console.log("Age is Between 10 and 20");
    }
    else if(age==10 || age==20){
        console.log("Age is 10 or 20");  
    }
    else{
        console.log("AGe is greater 20 or less than 10 ");
        
    }


    //2. Write a programm to Demonstarate Switch Case Statements.

    gender='female';

    switch (gender) {
        case 'male':
            console.log("You are a Boy");
            break;
        case 'female':
            console.log("You are a Girl");
            break;
    
        default:
            console.log("You are Other");
            break;
    }

    /// 3. Check Number is Divisible by 3 and 2 or not.

    num=30;

    if (num%2==0 && num%3==0) {
        console.log(num," is Divisible By 3 and 2");        
    } else {
        console.log(num," is Not Divisible By 3 and 2"); 
    }

    //  
    /// 4. Check Number is Divisible by 3 or 2 or not.

    num2=15;

    if (num2%2==0 || num2%3==0) {
        console.log(num2," is Divisible By 3 or 2");        
    } else {
        console.log(num2," is Not Divisible By 3 or 2"); 
    }

    //   5.Print You can Drive or not using ternary Operator

    x=51;

    x>=18 ? console.log("You can Drive") : console.log("You can't Drive");
    
    
