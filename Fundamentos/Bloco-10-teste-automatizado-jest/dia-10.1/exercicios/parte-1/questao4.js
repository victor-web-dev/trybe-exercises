function encode(string) {
  let charCode = ['a', 'e', 'i', 'o', 'u'];
  let text = string.split('');

  for (let key in text) {
    for (let key2 in charCode) {
      if (text[key] === charCode[key2]) {
        text[key] = ++key2;
      }
    }
  }
  return text.join('');
}

function decode(string) {
  let charCode = ['a', 'e', 'i', 'o', 'u', ''];
  let text = string.split('');

  for (let key in text) {
    for (let key2 in charCode) {
      if (text[key] === key2) {
        text[key] = charCode[key2 - 1];
      }
    }
  }
  return text.join('');
}

module.exports = { encode, decode };