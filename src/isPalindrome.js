function isPalindrome(str) {
  var regString = str.toLowerCase().replace(/[^0-9a-z]/gi, '').split('');

  for (var i = 0; i < regString.length/2; i++) {
    if (regString[i] !== regString[regString.length -1 -i]) {
      return false;
    }
  }
  return true;
}

console.log();
