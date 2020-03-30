function globalFunction(param = 'parameter in global function'){
    const innerVariable = 'variable in global function' ;
    function innerFunction(){
        return functionScopeVariable;
    };

    return innerFunction;
};

const returnedFunction1 = globalFunction('param of first call to global function');
const returnedFunction2 = globalFunction('param of second call to global function');

console.dir(returnedFunction1);
console.dir(returnedFunction2);



