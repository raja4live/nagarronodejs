const express = require("express");
const app = express();
var url = require('url');
//console.log(app);
//Root path
var todos = [];
app.get('/todos', function(req,res){
   // res.writeHead(200, {'Content-Type': 'text/html'});
    let str = '';
    for(var i = 0; i < todos.length; i++){
        str = str + `<li>${ todos[i] }</li>`;
    }

    res.send(`<ul>${ str }</ul>`);
});

app.get('/todos/add', function(req,res){
       var path = url.parse(req.url, true);
       var tasks = path.query.task;
       todos.push(tasks);
       let str = '';
    for(var i = 0; i < todos.length; i++){
        str = str + `<li>${ todos[i] }</li>`
    }
 //   res.writeHead(200, {'Content-Type': 'text/html'});
    res.send(`<ul>${ str }</ul>`);
});

app.get('/todos/delete', function(req,res){
       var path = url.parse(req.url, true);
       var id = path.query.id;
       todos.splice(id,1);
            let str ='';
    for(var i = 0; i < todos.length; i++){
        str = str + `<li>${ todos[i] }</li>`;
    }
 //   res.writeHead(200, {'Content-Type': 'text/html'});
    res.send(`<ul>${ str }</ul>`);
});

app.get('/todos/update', function(req,res){
   var path = url.parse(req.url, true);
       var id = path.query.id;
        var tasks = path.query.task;
       todos[id] = tasks;
            let str ='';
    for(var i = 0; i < todos.length; i++){
        str = str + `<li>${ todos[i] }</li>`;
    }
   // res.writeHead(200, {'Content-Type': 'text/html'});
    res.send(`<ul>${ str }</ul>`);
});
app.listen(8080);