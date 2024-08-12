const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) { //number is not zero
    console.log('error');
}
else if (number === 0) { //number is 0
    console.log(`The factorial of ${number} is 1.`);
}
else {  //number positive
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
