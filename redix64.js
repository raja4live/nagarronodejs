console.log("Hello",process.argv[2]);
var str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
var residual = process.argv[3];
if(process.argv[2] === 'to'){
    var rixit;
    var result = '';
  while (true) {
            rixit = residual % 64;
          
            result = str.charAt(rixit) + result;
         
            residual = Math.floor(residual / 64);
            

            if (residual == 0)
                break;
            }
        console.log(result);

}
var rixits = process.argv[3]; 
if(process.argv[2] === 'from'){
var result = 0;

        
        rixits = rixits.split('');
        for (var e = 0; e < rixits.length; e++) {
           
            result = (result * 64) + str.indexOf(rixits[e]);
          
        }
        console.log(result);    
}


