//      Def : Collection of items. It's linear way to store items


//      Store Data in Array

let str =["Ironman", "Thor", "Batman", "Superman"];
let num =[21, 43, 67, 32];

let mixedArr=["Ironman", 32, "Batman"]          // This is not recommanded to use

//             update data in array

mixedArr[1]=92;

console.log(mixedArr);

//      but we not update String like an Array

let string="NayanChaturvedi";
string[2]="a";
console.log(string)         //output :  NayanChaturvedi

//      Reason is String is immutable in JS but Array are mutable



//      ques : Find an Average marks of Student [85, 97, 44, 37, 76, 60]

let sum=0;
let count=0;
let arr= [85, 97, 44, 37, 76, 60];
for(let value of arr)
{
    sum+=value;
    count++;
}

console.log(`Average marks of student is ${sum/count}`)

//      ques : For a  given array of prices of 5 items = [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them.
//              change the array to store final price after applying offer.




for(let value of arr)
{
    let offer=0;
    let finalPrice=0

     offer=value/10;
     finalPrice=value-offer;
     console.log(`${value} after apply offer 10 % price will be ${finalPrice}`);
}


//          Methods in Array

//       1. Push() : Add to end                               4. Concat() : joins multiple array  
//      2. Pop() : delete from end and return                   5. unshift() : add to start
//      3. toString() : Convert array to String                 6. shift() : delete from start and return.

//      7. Slice : return a piece of array                      8. splice() : Change original array
//                  not change original arrat
//      eg = slice(startIndex, endIndex)                        eg = splice(startIndex, deleteCount, addElement)



let arr=[2, 4, 6, 76, 43, 12, 44, 78, 89];

arr.unshift(1);
console.log(arr);           // Output : [1, 2, 4, 6, 76, 43, 12, 44, 78, 89]

console.log(arr.shift())        //  Output : 1


//          splice()
let arr= ["Microsoft", "Wipro", "TCS", "Google", "IBM"]
arr.splice(1, 1, "UpdateElement");
console.log(arr);       // ['Microsoft', 'UpdateElement', 'TCS', 'Google', 'IBM']
