const alphabet = "NEGIE1"

function reverseString(str) {
    const number = str.match(/\d+/g);
    const letters = str.match(/[a-zA-Z]+/g);
    const reversed = letters[0].split('').reverse().join('');
    
    return reversed + number;
}

console.log(reverseString(alphabet));

