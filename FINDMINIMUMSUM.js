var str = "aaab"
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
}

//get frequencies in farr
var farr = getFrequency(str);
//console.log(farr);
var k = 2;
//get all the keys of farr
var keys = Object.keys( farr );
//remove character to find minimum value
for(var i =0 ; i < k; i++ ){
    var max = keys[0];
    for(var j = 0 ; j < keys.length; j++){
        if(farr[keys[j]] > farr[max]){
            max = keys[j];
        }
    }
    farr[max] = farr[max] - 1;
    console.log()
}
var sum =0 ;
for(var c = 0 ; c < keys.length; c++){
    sum = sum  + farr[keys[c]] * farr[keys[c]];

    
}

console.log(sum);