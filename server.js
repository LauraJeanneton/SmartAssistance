const express  = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname+'/src'));
app.use(express.static('src'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// console.log that your server is up and running

app.listen(port, () => console.log(`Listening on port ${port}`));



// create a GET route

app.get('/', (req, res) => {
    res.redirect('home');
});

app.get('/index', (req, res) => {
    res.send("INDEX");
});

app.get('/connexion', function(req, res) {
    res.redirect('connexion');
});

app.post('/connexion', function(req, res) {
    var pseudos = req.body.pseudo;
    res.redirect('membre');
});

app.post('/inscription', function(req, res) {
    res.redirect('membre');
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

app.get('/archive', function(req, res) {
    res.redirect('archive');
});

app.post('/draft', function(req, res) {
    res.redirect('draft');
});

app.get('/postsPost'),function (req,res) {
    res.redirect('postsPost');
}
app.get('/newMessage'),function (req,res) {
    res.redirect('newMessage');
}

app.get('/archiveMessage'),function (req,res) {
    res.redirect('archiveMessage');
}
