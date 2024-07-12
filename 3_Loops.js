    //                             Loops



    //                            For Loop

for(let i=0; i<5; i++)
{
    console.log("Nayan");
}





//                   Calculate sum of first n number

let num=prompt("Enter an Number");
let sum=0;

for(let i=0; i<num; i++)
{
    sum+=i;
}
console.log("Sum is : ",sum);




//       Def :   Infinite loop = A loop that never ends      

//                     While Loop

let i=0;
while(i<6)
{
    console.log(i);
    i++;
}

console.log("Ending loop value of i is : ",i);




//              do-While loop

console.log("Do-While loop")
let i=0;
do
{
    console.log(i);
    ii++;
}
while(i<6)



//          There are 2 special type of loops
//          1. for-of loop
//          2. for-in loop
//          ye loop hame help karte hai loop karna for some special datatypes;

//          for-of help karta hai Strings and Arrays ke uper loop lagane me help karta hai

//                      for-of loop

let str="JavaScript";
for(let val of str)
{
    console.log(i);
}

//          for-of hamesha String and array ke liye use karte hai. hum object ke liye nahi karte
//          Object ke liye hum for-in loop ko use karte hai


let Student =
{
    name : "Nayan Chaturvedi",
    age : 24,
    cgpa : 6.8,
    isPass : true
}

for(let value in Student)
{
    console.log("Key : ", value, "||  Value : ", Student[value]);           // Yaha hum Student["value"] nahi likege wanra wo Student 
                                                                            // me jakar exact value key dudhne ki kosis karega                                                                           
}



//      ques :    Print all even number

let num = prompt("Enter an number")
for(let i=0; i<num; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}


//    ques :  Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user 
//            enters correct value

let gameNum=25;
let userNum=prompt("Guess any number");
console.log("User enter : ", userNum);

while(userNum != gameNum)
{
    console.log("You enter wrong number")
    userNum=prompt("Guess again")
}
console.log("Congratulation... You enter right number")