 function fibonacci(n){

     if(n <= 1) {
         return 1
     } 

     const left = fibonacci(n - 1);
     const right = fibonacci(n - 2);
        
        return left + right;
      
            
}

console.log(fibonacci(2));