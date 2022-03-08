// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(victim){

    if(typeof victim != "number"){
        return 0;
    }

    // Multiple the param by itself
    let output = victim * victim;

    // Send the value back
    return output;

}

console.log(squared("Parrots"));
console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(victim){

    let myLength = victim.length;

    if(typeof myLength == "number"){
    // Return the value
    return myLength;
    }else{
        return 0;
    }

}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))
console.log(stringLength(283417));
console.log(stringLength(true));
console.log(stringLength({"cow":"moo"}));

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers(ichi, ni){
    
    if(typeof ichi != "number"){
        ichi = parseFloat(ichi);

        if(isNaN(ichi)){
            return NaN;
        }
    }

    if(typeof ni != "number"){
        ni = parseFloat(ni);
        
        if(isNaN(ni)){
            return NaN;
        }
    }

    // Add numbers together
    let output = ichi + ni;

    // Give the sum back
    return output;

}


 console.log(addNumbers(4, 2));
 console.log(addNumbers(6, 3));
 console.log(addNumbers("dogs", "cats"));
 console.log(addNumbers(6.2364, 3.1415967));




// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(theName){

    // combine the strings
    let output = "Hello, " + theName;

    // give back the value
    return output;

}

console.log(sayHello("Paul"));