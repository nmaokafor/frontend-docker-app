const {
  caesarCipher,
  symbolCipher,
  reverseCipher,
} = require('./encryptors.js');

const encodeMessage = (value) => {
  const encodedMessageOne = caesarCipher(value, 13);
  const encodedMessageTwo = symbolCipher(encodedMessageOne);
  const encodedMessageThree = reverseCipher(encodedMessageTwo);

  return encodedMessageThree;
};

const decodeMessage = (value) => {
  const decodedMessageOne = reverseCipher(value);
  const decodedMessageTwo = symbolCipher(decodedMessageOne);
  const decodedMessageThree = caesarCipher(decodedMessageTwo, -13);

  return decodedMessageThree;
};

// User input / output.

const handleInput = (userInput) => {
  const value = userInput.toString().trim();
  let output;

  if (process.argv[2] === 'encode') {
    output = encodeMessage(value);
  }

  if (process.argv[2] === 'decode') {
    output = decodeMessage(value);
  }

  process.stdout.write(output + '\n');
  process.exit();
};

process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
