function guessNumber() {
    const random = Math.floor(Math.random() * 10) + 1;
    let number = parseInt(prompt('Guess a number from 1 to 10: '));
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }
    if(number == random) {
        console.log('You guessed the correct number.');
    }
  }
guessNumber();

/*output:

Guess a number from 1 to 10: 2
Guess a number from 1 to 10: 5
Guess a number from 1 to 10: 8
Guess a number from 1 to 10: 5
Guess a number from 1 to 10: 7
You guessed the correct number.

*/
