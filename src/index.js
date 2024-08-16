const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseArr = expr.split(" ") //converting string to array

    //decoding morse to array
    for (let i = 0; i < morseArr.length; i++) {
        if (morseArr[i] === "" && morseArr[i + 1] === "") {
            morseArr.splice(i, 2, ' ')
        }
        if (morseArr[i] !== "") {
            morseArr[i] = MORSE_CODE[morseArr[i]]
        } else {
            morseArr[i] = ' '
        }
    }
    return morseArr.join('')
}

module.exports = {
    decode
}