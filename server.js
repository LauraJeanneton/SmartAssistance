const express  = require("express");
const app = express();
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

app.get('/connexion', function(req, res) {
    res.redirect('connexion');
});

app.post('/connexion', function(req, res) {
    res.redirect('/membre');
});

app.post('/inscription', function(req, res) {
    res.redirect('/membre');
});

app.get('/membre', (req,res) =>{
    res.redirect('membre');
});

app.get('/posts', function(req, res) {
    res.redirect('posts');
});
app.get('/message', function(req, res) {
    res.redirect('message');
});
app.get('/param', function(req, res) {
    res.redirect('param');
});

