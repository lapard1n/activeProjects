function splitSpace(str) {
  str = str.split(' ').join('');
  if (str) {
    console.log(true, 'long');
  } else {
    console.log(false, 'long');
  }
}

function splitSpace01(str) {
  str = str.split(' ').join('');
  return str ? console.log(str, true, 'short') : console.log(str, false, 'short');
}

// const input = '   Hello, world!     ';
// console.log(
//   input.replace(/^\s+|\s+$/g, '')
// );
// console.log(input.trim());

splitSpace01('     Hello world boy ')
