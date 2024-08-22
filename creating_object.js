const person = { 
    name: 'Sneka',
    age: 21,
    hobbies: ['reading books', 'chess', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 100,
        science: 90
    }
};

console.log(typeof person); 
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

/*output

object
Sneka
reading books
Hello everyone.
100

*/
