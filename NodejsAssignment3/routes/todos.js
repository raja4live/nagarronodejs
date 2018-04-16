const route = require('express').Router()

/**
 * Each todo would be of type - 
 * {task: 'some task', done: true}
 */
let todos = [{id:0,task: 'Predefined Task',done:false,bchecked:false},
{id:1,task: 'new Predefined Task',done:false,bchecked:false}

];

route.get('/', (req, res) => res.json(todos.filter(function(x){ return true}
)))

route.post('/', (req, res) => {
    if (typeof req.body.done === 'string') {
        req.body.done = (req.body.done === 'true')
    }
    if (typeof req.body.done === 'string') {
        req.body.done = (req.body.bchecked === 'true')
    }
    let newTodo = {
        id:req.body.id,
        task: req.body.task,
        done: req.body.done,
        bchecked:req.body.checked
    }
    todos.push(newTodo)
    res.json({
        success: true,
        id: todos.length - 1
    })
})

route.get('/:id', (req, res) => res.json(todos[req.params.id]))

route.delete('/:id', (req, res) => {
    var index = todos.findIndex(x => x.id == req.params.id);
       todos.splice(index,1);
    res.json({
        success: true,
        length: todos.length
    })
})


module.exports = route