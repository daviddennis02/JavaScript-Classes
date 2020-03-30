function sum(){
    let sum = 0, arr = [];
   
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    function range(start,end){
	var arr = [];
      if ( start < end){
      	for (i = start; i <= end; i++){
    	arr.push(start++);
        }
       }
       else {

      (start > end)
      	for (i = start; i >= end; i--){
    	arr.push(start--);
        }
       }  	    
        return arr;
    }
    return range;
    
};
    
   

