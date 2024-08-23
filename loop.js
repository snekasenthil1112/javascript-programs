const student = { 
    name: 'sneka',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};
for (let key in student) { 
    let value;
    value = student[key];
    console.log(key + " - " +  value); 
} 

/* output
name - sneka
age - 20
hobbies - reading,games,coding
*/
