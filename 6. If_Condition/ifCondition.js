//If condition is to do something if the given condition is true
//else condition says do something else in case the if condition is not true

//eg. 

if(2<1){
    console.log('Yay!')
}
else{
    console.log('Ops!')
}

// as we know 0 is equivalent to false:

if(0){     //if false
    console.log('false')
}

// else if 

// using multiple if
if(10>11){
    console.log(1);
}
if(12>11){
    console.log(2)    // console logs 2
}
if(14>15){
    console.log(3)      // // console logs 3
}
else{
    console.log(4)
}


// using else if

if(10>11){
    console.log(1);
}
else if(12>11){
    console.log(2)    // console logs 2  (does not go to next)
}
else if(14>15){
    console.log(3)     
}
else{
    console.log(4)
}


// write if else in fancy way 

(2<3) ? console.log('true') : console.log(false);

// this is same as: 

if(2<3){
    console.log('true');
}else{
    console.log('false')
}