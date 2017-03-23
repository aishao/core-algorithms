export default function isPalindrome(givenWord) {
  givenWord = givenWord.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let reverseWord = givenWord.split("").reverse().join("");
  return givenWord === reverseWord;

}
console.log(isPalindrome("A man, a plan, a canal: Panama"));

/* if (givenWord === reverseWord) {
  return true
} else  {
  return false
}
*/
