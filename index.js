const express = require('express');
const app = express();
const path = require('path');

app.use('/',express.static('public'));
app.use('/questions',express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/quiz.html'));
})

app.get('/questions', (req,res)=>{
    res.sendFile(path.join(__dirname + '/public/questions.html'));                          
})

app.listen(3000, ()=>{
    console.log('server started');
})