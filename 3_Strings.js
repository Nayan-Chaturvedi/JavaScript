// //              String is a sequence of character used to represent text
// //              String ek mutable hoti hai JS me

// //              Declaration

// let str='Nayan';
// let strr="Nayan";

// //      Method
// //      
// //      String length : str.length
// //      String index  : str[1]          output : a

// //      Template Literals : A way to have embedded expressions in String

// let sentence = `This is Template literal`;
// console.log(sentence);
// console.log(typeof sentence)


// //      Uses of Template Liternals

// let object=
// {
//     item : "Pen",
//     price : 29
// }

// console.log("The cost of", object.item, " is ", object["price"]) // Yaha 10 highlight hokar aa raha hai, kyoki ye ek number hai
//                                                                     // number hamare output me highlight ho kar aate hai

// //          Another way to write

// console.log(`The cost of ${object.item} is ${object.price}`);// yaha hamne template literal create kiya hai, yaha 
//                                                                 //10 String ka part ho gya hai


//  //     String interpolation : To create a String by doing substitution of placeholder/expression
//  //     eg : `String text ${expression/placeholder} String text`  
 
//  console.log(`uses of Literal ${1+2+3+4}`)      // Output : uses of Literal 10

//  let strrr="Nayan\tChaturvedi";
// console.log(strrr);       // Output : Nayan	Chaturvedi
// console.log(strrr.length)       // 16 yaha (\t) ko sirf 1 single character ki tarah count karta hai


// //          Methods
// //      1. string.toUpperCase()      2. string.toLowerCase()    3. string.trim()// remove whitespace for Starting and ending
// //      4.string.slice(start, end?)     5.string.concat(str2)      6.string.replace(oldValue, newValue)    7. string.charAt(index)

// let string="Nayan Chaturvedi";
// console.log(string.slice(1,9));     // output : ayan Cha


//  ques : Promt the user to enter their fullname . Generate a username fir them based on the input.
//  Start username with @, follwed by their fullname and ending with the fullname length
//   eg : shradhakapra          output : @shradhakapra13

let userName="";
let fullname=prompt("Enter full name");
userName = "@"+fullname+fullname.length
console.log(userName)

