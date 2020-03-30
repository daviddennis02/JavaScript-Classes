function range(start,end){
	let arr = [];
      if ( start < end){
      	for (i = start; i <= end; i++){
    	arr.push(start++);
        }
       }
       else {

      ( start > end)
      	for (i = start; i >= end; i--){
    	arr.push(start--);
        }
       }
  	            
  return console.log(arr);
}
range(10,-1);    
   

