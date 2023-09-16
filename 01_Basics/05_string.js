// Whenn we write string in a program , we declare the string as a variable.

const name ="Shivam "
const surname = " Mishra"

//console.log(name + surname + " variable");

// Other way of printing sting 
console.log(`Hello my name ${name} and my surname is ${surname}`); // this is more oftenli=y used in backend part.

// other way of declaring string 
const gameName = new String("Shi-vi")
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i')); //  to check where the character is located 

const newString = gameName.substring(0,3)
console.log(newString);

