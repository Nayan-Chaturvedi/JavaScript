//      Function : It's is a block of code that performs a specific task, can be invoked whenever needed.

//      Crete function : use function keyword to create function

//                       function functionName() ,      function functionName(param1, param2....)
                        // {                            {
                        //     do some work                 // do some work
                        // }                            }

// Call function :  functionName();


function myFunction()
{
    console.log("Welcome Nayan");
    console.log("This is JS series");
}

myFunction();


function myFunction(msg) // msg -> Parameter
{
    console.log(msg);
}

myFunction("I love JS") // I love JS -> Argument



//          Create function to calculate sum of 2 numbers
function myFunction( num1, num2)
{
    return num1+num2;
}

let res=myFunction(2, 8);
console.log(res);


//          Arrow function : Compact way of writting function

//          eg : const functionName = (parameter1, parameter2) =>
                    // {
                    //     do some work
                    // }

//      Create Arrow function to calculate sum of 2 numbers

const sumFunction =(num1, num2) =>
{
    return num1+num2;
}

console.log(sumFunction(10, 10));


         ques : Create a function using the "function" keyword that takes a String as an argument and returns the number 
                 of vowels in the string

function countVowels(string)
{
    let count=0;
    for(let value of string)
    {
        if(value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u')
        {
            count++;
        }
    }
    console.log(`Number of vowel in String is : ${count}`)
}

countVowels("Hii How are you");

         ques : Create an Arrow function to perform same task

const countVowels =(string) =>
{
    let count=0;
    for(let value of string)
    {
        if(value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u')
        {
            count++;
        }
    }
    console.log(count);
}

console.log(countVowels("Hii How are you"))


//          forEach loop in Array
//          arr.foeEach( callBackFunction)      CallBackFunction : It is a function to execute for each elemnt in the array
            // eg :  arr.forEach((value)=> console.log(value));

let arr=[2, 3, 5, 2, 67, 3, 12, 21, 54];

arr.forEach((value)=>console.log(value));

let arr=["Delhi", "Bengaluru", "Gwalior"];
arr.forEach((value)=>console.log(value.toUpperCase()))      // DELHI, BENGALURU, GWALIOR

//      In forEach method there are 3 parameter le sakta hai 1. value, 2. Index 3. array

let arr=["Delhi", "Bengaluru", "Gwalior"];
arr.forEach((value, index)=>console.log(value, index))      // DELHI 0, BENGALURU 1, GWALIOR 2

let arr=["Delhi", "Bengaluru", "Gwalior"];
arr.forEach((value, index, arr)=>console.log(value, index, arr)) 


//              Higher order function/methods : ye wo function/methods hote hai jo dusre kisi function ko as a parameter le lete hai ya
//               (dusre function ko as a parameter use kar rahe hote hai), ya kisi function ko return kar rahe hote hai   
//                  eg = forEach method                            


//          ques : for a given ar of number, print the square of each value using forEach loop

let arr=[1, 2, 3, 4];
arr.forEach((value)=> console.log(value*value));

//              Map : Creates a new array with the results of some operations.
//              eg : arr.map(callBackFunction(value, index, arr));

let arr=[1, 2, 3, 4];
let newArr=arr.map((value) =>
{
    return value;
})

// console.log(newArr)

//              Filter : Creates a new array of elements that give true for condition
//              eg : all even number
//              let newArr = arr.filter((value)=>{
2

