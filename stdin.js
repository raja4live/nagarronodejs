var question = [
    "What is ur name :",
    "What is ur fav hobby :",
    "What is ur preferred programming language : "
    ];
    
    var answer = [];
    
    function ask(i){
        process.stdout.write(`\n\n\n ${ question[i] }`);
        process.stdout.write(">");
    }
    
    process.stdin.on('data',function(data){
        answer.push(data.toString().trim());
        if(answer.length < question.length){
            ask(answer.length);
        }
        else{
            process.exit();
        }
    });
    
    
    process.on('exit', function() {
        // body...
        process.stdout.write("\n\n\n");
        
        process.stdout.write(`Go ${ answer[1]} ${ answer[0]} you can finish writing ${ answer[2]} later`);
        
        process.stdout.write("\n\n\n");
    });
    
    ask(0);