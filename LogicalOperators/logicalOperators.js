// there are three types of operators: 
// 1. And operator  2. Or operator      3. null operator

//And Operator (&&)

const age = 30;
const isIndigenous =true;
const isVeteran = true; 
if(age < 65 && age > 21){
    console.log('Can drink');
}

// Or operator (||)
if(age>21 || isIndigenous){
    console.log("Can drink")
}

//using both

if(age>21 || isIndigenous && age>65 || isVeteran){
    console.log("Can drink")
}

// ***Precedence of && is higher than*** ||

//Null (!) simply means not eg. !true means not true or false


if(!isVeteran){
    console.log("Not a veteran");
}

console.log(!true) //false

console.log(!null)  // true



//Nullish operator
let results = localStorage.getItem("something")

result = a ?? b    //is same as

result = (a !== null && a !== undefined) ? a : b;
