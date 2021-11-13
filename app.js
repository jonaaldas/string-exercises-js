// 1. Reverse that string
// function reverse(str){
//   let newStr = "";
//   for(let i = str.length-1; i >= 0; i--){
//     newStr = newStr + str[i];
//   }
//   return newStr
// }

// console.log(reverse("jonathan "));


// 2. Is it a palindrome?
// Another classic. You can apply your previous solution to help with this one.

// Does the given string spell out the same word when written out backwards? For example kayak.

// function palindrome(str){
//   let newStr = "";
//   for(let i = str.length-1; i >= 0; i--){
//     newStr += str[i];
//   }
//   if(str[0].toLowerCase() === newStr[0].toLowerCase()){
//     return true 
//   } else {
//     return false;
//   } 
// }

// console.log(palindrome("madam"));


// 3. Remove specific characters from a string
// What’s the most efficient way to strip specific characters from a string? Without using replace().

// Your function must strip multiple different characters from the provided string.

const removeCharacters = (someString, chartoRemove, chartoReplace) => {
  let newString = someString.split(chartoRemove).join(chartoReplace);
  return newString
}

console.log(removeCharacters("Joanthan", "n", "/"))
// I m n emple string