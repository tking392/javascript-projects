//Part Three section one

let language = 'JavaScript';
let initials = language.slice(0,1) + language.slice(4,5);

//1. Use strilanguage.slice(0,1) + language.slice(4,5)ng concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log();

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language.replace("ava", "").replace("cript", ""));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."


console.log(`The abbreviation for ${language} is ${initials}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(language.replace("Z", "S").slice(3).toLowerCase());

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(notTitleCase.replace("t", "T").replace("c", "C"));