// Variable declared in Global Scope and assigned a string
let x = 'Hello World';

// Variable declared in global scope and assigned a function
function greet(z) {

  //
  let y = 'text in greet function';

  // Variable declared in function scope and assigned a function
  function innerGreet() {

    // Returns the string value x = hello world 
    return `x = ${x}, y = ${y}, z = ${z}`;
  }

  // greet function returns the function innerGreet
  return innerGreet;
}

// Variable declared and assigned a call to greet function 
const uuu = greet('parameter1');
const vvv = greet('parameter2');


x = 'Thanks and goodbye';

// Variable declared and assigned a call to a function 
const innerFuncReturn = uuu();
const innerFuncReturn2 = vvv();


// Outputs the return value of the innerGreet()
console.log(innerFuncReturn);
console.log(innerFuncReturn2);

