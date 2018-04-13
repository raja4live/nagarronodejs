var N;
var array;
var question = [];
var flag;
function isArraySorted(arr,start,end){
        if(start >= end){
            return true;
        }
        else if(arr[start] > arr[start + 1]){
            return false;
        }
        else{
            return isArraySorted(arr,start + 1,end);
        }
        
    }
    process.stdin.on('data',function(data){
       
    

          array = data.toString().trim().split(' ').map(function(i){ return parseInt(i, 10)});
          console.log(array);    
          process.exit();
    

    
    });
    
    
    process.on('exit', function() {
        // body...
        array.shift();
        console.log(array);
        console.log(isArraySorted(array,0,array.length - 1));
        
    });