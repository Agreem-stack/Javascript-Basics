// Regualr function ---------------------------------------------------------

function cold_coffee(customer_name) {
    console.log(`Here is your cold coffee ${customer_name}`);
}
// Now to call the function, we have to type the name of this function which is
// "cold_coffee" and then we have to add paranthesis "()", and 
// if any parameter is declared when making the function,
// we can pass the arguements, when we are calling the function inside the paranthesis,
// as we store the value inside any variable 
// we can run the function now like this :- 

cold_coffee("agreem");



// We can aalaso store a function inside a variable like this :-

const coffee = function (customer_name) {
    console.log(`Here is your coffee de late  ${customer_name}`);
}

coffee("agreem");



// arrow functions---------------------------------------------------------


// This is a method to usee arrow function using explicit return, 
// where we have to specifically tell the function to return the value
// after executing the code 

const mul = (num1, num2, num3) => {
    console.log(num1 * num2 * num3);
}

mul(2, 4, 4);



// This is a second method to use arrow functions using implicit return 
// where we don't have to call the function to return the value after executing the code 

const sum = (num1,num2,num3) => ( num1+num2+num3 );

console.log(sum (1,2,3));

