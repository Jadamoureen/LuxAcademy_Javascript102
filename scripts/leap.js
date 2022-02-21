/**
 * A JavaScript program that checks whether a year is leap year or not. 
 * Note: A leap year is exactly divisible by 4 except for century years 
 * (years ending with 00). The century year is a leap year only if it is 
 * perfectly divisible by 400.
 */

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016)); //prints true
console.log(leapyear(2000)); //prints true
console.log(leapyear(1700)); //prints false
console.log(leapyear(1800)); //prints false
console.log(leapyear(100)); //prints alse