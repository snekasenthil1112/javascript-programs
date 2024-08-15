function binaryToDecimalIterative(binary) {
    let decimal = 0;
    const n = binary.length;
    for (let i = 0; i < n; i++) {
        const digit = parseInt(binary[n - i - 1]);
        decimal += digit * Math.pow(2, i);
    }
    return decimal;
}
const binaryNumber = "10000";
console.log("result is : ",
binaryToDecimalIterative(binaryNumber));

/*output
result is :  16
*/
