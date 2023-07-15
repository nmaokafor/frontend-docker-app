const caesarCipher = (value, amount = 0) => {
  if (amount < 0) {
    return caesarCipher(value, amount + 26);
  }
  let output = '';
  for (let i = 0; i < value.length; i++) {
    let char = value[i];
    if (char.match(/[a-z]/i)) {
      let code = value.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
};

const symbolCipher = (value) => {
  const symbols = {
    'i': '!',
    '!': 'i',
    'l': '1',
    '1': 'l',
    's': '$',
    '$': 's',
    'o': '0',
    '0': 'o',
    'a': '@',
    '@': 'a',
    'e': '3',
    '3': 'e',
    'b': '6',
    '6': 'b'
  }

  let output = '';
  for (let i = 0; i < value.length; i++) {
    let char = value.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char]
    } else {
      output += char;
    }
  }
  return output;
}

const reverseCipher = (sentence) => {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
   return words.join(' ');
};

module.exports = {
caesarCipher,
symbolCipher,
reverseCipher
}