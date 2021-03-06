
// ## 1. Verbal questions

// Write answers to the following questions as comments. 

// 1. What is the difference between a **parameter** and an **argument**?

// 1) Parameter is the name placed in the function parenthesis, and the argument is the actual value associated 
//     with the parameter name.

// 2. Within a function, what is the difference between **return** and **console.log**?

// 2) console.log is a function that allows you to see what your code is actually doing logging to the console.  
//      return actually returns a value to be used in your program.

// 3. What are the implications of the ability of a function to return a value?

// 3) That a function will perfom a task once or mulitple times in a program to provide infomation to the 
//      program.

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 1 - Verbal questions".

// ## 2. Palindrome again.
// Write a function `checkPalindrome` that accepts a single argument, a string. Yes, you've done it before, 
// but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you 
// can do it without looking back at your previous answer. The function should return true if the string is 
// a palindrome, false if not. Make sure your function will give the correct answer for words with **capital 
// letters**.

// function checkPalindrome(str) {
//     str =  str.toLowerCase();
//     if (str === str.split('').reverse().join('')) {
//         console.log("True");
//     }else {
//         console.log("False");
//     }
// }
// checkPalindrome("Radar");

// checkPalindrome("Borscht");

// ```javascript
// console.log(checkPalindrome("Radar"));
//  => true
// ```

// ```javascript
// console.log(checkPalindrome("Borscht"));
// => false
// ```

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 2 - Palindrome".

// ## 3. Digit Sum
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.

// **The below function I found on w3resource, but only does two interger numbers**
// function sumDigits(num) {
//   return num % 10 + Math.floor(num / 10);
// }
// console.log(sumDigits(36));
// //  This one I built myself after researching and A LOT of trial and error
// function sumDigits(num) {
//     let final = 0;
//     str = num.toString();
//     arr = str.split('')
//     for (let i = 0; i < arr.length; i++){
//         final += parseInt(arr[i]);
//     }
//     return final;
// }
// console.log(sumDigits(1254));
// ```js
// console.log(sumDigits(42));
// => 6;
// ```

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 3 - Digit Sum".

// ## 4. Pythagoras
// // 
// Write a function `calculateSide` that takes two arguments: 
// `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.

// _hint:_ discover the Pythagorean Theorem on a website called 
// google.com

// // _hint:_ checkout the [Math methods]
//  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

// 4)
// function calculateSide(sideA, sideB) {
//     let a = sideA * sideA;
//     let b = sideB * sideB;
//     let c = Math.sqrt(a + b);
//     return c;
// }
// console.log(calculateSide(8, 6));

// **_restriction_**: for this problem, do NOT use `Math.hypot()` 
// (but for the rest of time, once you've done this problem feel free)
// ```js
// console.log(calculateSide(8, 6));
// => 10
// ```
// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 4 - Pythagoras".


// ## 5. Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of 
// the numbers in the array. **Do not use `.reduce()`**.

// Expected result:
// ```javascript
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21
// ```

// 5)

// const array = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// function sumArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray(array));
// // <hr>
// // &#x1F534; **Commit your work.** <br>
// // The commit message should read: <br>
// // "Commit 5 - Sum Array".
// // <hr></hr>

// ## 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number 
// except 1 and itself. If you want to read more deeply about it,
//  [go here](https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, you only need to test as far as the 
// **square root** of that number. This is advisable for optimization and 
// testing large numbers.

// ### Step One
// Write a function called `checkPrime` that will test whether a number is 
// Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for 
// loop_.


function checkPrime(num) {
    for (let i = 2; i <= num; i++) {
    //    console.log(num);
        if (num === 2 || num === 3) { 
        return true;
        }else if (num % 2 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0) {
            return false;
        }else {
            return true;
        }
    }
}
console.log(checkPrime(3));

// ### Step Two
// Write another function called `printPrimes` that will print (console log) 
// all the Primes up to an arbitrary limit. For example, if you invoke your 
// function with `printPrimes(97)`, it will print all the Prime numbers up 
// to and including 97.
// This function can **call on** the previous `checkPrime` function.
function printPrimes() {
    for (let i = 2; i <= 1000; i++) {
    //    console.log(num);
        if ([i] === 2 || [i] === 3) { 
         console.log([i]);
        }else if ([i] % 2 === 0 || [i] % 5 === 0 || [i] % 7 === 0 || [i] % 11 === 0) {
            
        }else {
            console.log([i]);
        }
    }
}
const prime = printPrimes();

console.log(prime);

// </details>

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 6 - Prime Numbers".
// <hr></hr>