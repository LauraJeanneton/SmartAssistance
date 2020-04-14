
const express = require('express');
const app = express();
let fs = require('fs');
const port = process.env.PORT || 5000;
app.use(express.static(__dirname+'/src'));
app.use(express.static('src'));


// console.log that your server is up and running

app.listen(port, () => console.log(`Listening on port ${port}`));



// create a GET route

app.get('/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/index', (req, res) => {
    res.send("INDEX");
});

app.post('/connexion', function(req, res) {
    res.redirect('');
});

app.post('/inscription', function(req, res) {
    res.redirect('');
});

app.get('/test', (req,res) =>{
    res.send({express  : 'TEST'})
});

