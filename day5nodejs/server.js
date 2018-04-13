const express = require('express')

const routes = {
    teacher: require('./routes/teacher'),
    student: require('./routes/student')
}

const app = express()

app.use('/student', routes.student);
app.use('/mentor', routes.teacher);

app.listen(8080);