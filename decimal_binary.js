function decimalToBinary(N) {
    let binary = '';
    while (N > 0) { //10>0 5>0 2.5>0 1.25>0 0.4>0
        binary = (N % 2) + binary; //0 1 0 1
        N = Math.floor(N / 2); // 5 2.5 1.25 0.5
    }
    return binary;
}
let N = 10;
let binary = decimalToBinary(N);
console.log("The binary representation of given number is:- " + binary);


/* output
The binary representation of given number is:- 1010
*/
