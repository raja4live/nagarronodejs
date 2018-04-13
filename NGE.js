var ddarray = [[11, 9 ,13, 21, 3],[11, 13, 21, 3]];

for(var d = 0; d < ddarray.length; d++ ){
       var array = ddarray[d];    
       var stack = [];
       stack.push(array[0]);    

       for(var i= 1; i < array.length; i++){
                 var element = array[i];
                 var next = element;
          if(stack.length > 0){
                var pop = stack.pop();
                while(next > pop){
                      console.log(pop,'---->',next);
                        if(stack.length <= 0){
                            break;
                        }
                pop = stack.pop();
      
                }
                if(pop > next ){
                    stack.push(pop);
                }    
            }
            stack.push(next);
        }

        while(stack.length > 0){
            console.log(stack.pop(),'------>',-1);
        }
}


