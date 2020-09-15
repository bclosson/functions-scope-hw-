console.log('JS is working');

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

function checkPalindrome(str) {
    str =  str.toLowerCase();
    if (str === str.split('').reverse().join('')) {
        console.log("True");
    }else {
        console.log("False");
    }
}
checkPalindrome("Radar");

checkPalindrome("Borscht");

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