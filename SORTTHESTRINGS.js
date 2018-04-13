var arr = [
        
        ['82', '12'],
        ['77','13'],
        ['92' ,'023']
    
    ];
  function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}  

function compareSecondColumnForInt(a, b) {
    if (parseInt(a[1]) === parseInt(b[1])) {
        return 0;
    }
    else {
        return (parseInt(a[1]) < parseInt(b[1])) ? -1 : 1;
    }
}  

    console.log(arr.sort(compareSecondColumn));

    console.log(arr.sort(compareSecondColumnForInt));

    console.log(arr[0][0]);
    
    
    var narr = {'a' : 1, 'b' : 2, 'c' : 111};
    console.log(narr.valueOf());