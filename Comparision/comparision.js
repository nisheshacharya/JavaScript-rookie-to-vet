//Comparison in javaScript returns boolean 

/*
< greater than
> less than
<= greater than or equal to
> = less than or equal to
== equal to / is

=== absolute equal to

!== not equal
! === absolutely not equal
*/


// For numbers

console.log( 2> 1); // true
console.log(2 >=2); //true
console.log(2 === 2) // true

// for strings

console.log('a'== 'a'); // true
console.log('a'< 'b');  // true


// string and number combined


console.log('a'> 100); //false
console.log('a'<100);   // false

/*
Implicit Type Conversion: 
    JavaScript performs implicit type coercion when comparing values of different types.
    In this case, it converts the string 'a' to a number before comparison.
String-to-Number Conversion: 
    When a string is converted to a number, JavaScript attempts to parse it 
    as a numerical value. However, since the string 'a' doesn't represent a valid number, 
    it becomes NaN (Not a Number).
 NaN and Comparisons: 
    Any numerical comparison involving NaN results in false. 
    This means that NaN is considered neither less than, greater than,
    nor equal to any other number, including itself.
*/



// == and ===

console.log('1'== 1) // true
console.log('1'=== 1) // false

console.log(true ==1) // true
console.log(true ===1) // false

console.log("" == false) // true
console.log("" === false) // false

console.log(null == undefined) // true
console.log(null === undefined) // false




