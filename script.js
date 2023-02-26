// complete the given function

function palindrome(str){
str = str.toLowerCase().replace(/[\W_]/g, "");
  return str === str.split("").reverse().join("");
}
module.exports = palindrome
