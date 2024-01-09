/*There are three types of variables in javaScript.
let, const and var.
var is an old school variable. 
when we declare something with let, we can change it again.
when we declare something with const, we can not change it. 
*/

/*
Scope: 
*/

//var has function level scope.
//let and const have block level scope.
function varScopeCheck() {
  if (1 > 0) {
    var a = "apple";
  }
  console.log(a); // prints apple
}

//checking with let
function letScopeCheck() {
  if (1 > 0) {
    let a = "apple";
  }
  console.log(a); // throws error
}

// checking with const
function constScopeCheck() {
  if (1 > 0) {
    const a = "apple";
  }
  console.log(a); // throws error
}

//but, if we don't give any variable, javaScript takes var, which is function scope.

function scopeCheck() {
  if (1 > 0) {
    a = "apple";
  }
  console.log(a); // throws error
}
