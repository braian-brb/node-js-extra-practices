// Var
var variable = 'The VAR variable is visible to global scope'
if ( true ) {
  var variable = 'here I can overwrite everything and that is wrong'
}
console.log(variable)

//LET
let letVar = 'It is only visible in the local scope'
if( true ){
//  let letVar = 'as it is of local scope, what corresponds to that scope will be printed on the screen (in this example this will be ignored)'
  
  letVar = 'As here we are changing its value this if it is going to be printed, we are not declaring a new variable'
}
console.log(letVar)

//CONST 
const constant = 'The variable CONST cannot change its value (if it can mutate when it is not primitive)'

if ( true ) {
  const constant = 'As it is another scope, this would not give a problem ( is other variable )'
 // constant = 'this is going to throw an error because we want to change the value to a variable that is constant'
 // constant = 'TypeError: Assignment to constant variable.'
}
console.log(constant)

//Always use LET or CONST