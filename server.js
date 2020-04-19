const express  = require("express");
var bodyParser = require("body-parser");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname+'/src'));
app.use(express.static('src'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});




app.get('/', (req, res) => {
    return res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    next();
});



app.get('/connexion', function(req, res) {
    res.redirect('connexion');
});

app.post('/connexion', function(req, res) {
    if (connexion_users()==true) {
        res.redirect('membre');
    }
    else res.redirect('connexion');

});

app.post('/inscription', function(req, res) {
    if (connexion_users()==true) {
        res.redirect('membre');
    }
    else res.redirect('inscription');
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
app.listen(port, () => console.log(`Listening on port ${port}`));



function connexion_bdd(){
    const pgp = require('pg')

    const cn = {
        host: 'ec2-18-233-137-77.compute-1.amazonaws.com', // server name or IP address;
        port: 5432,
        database: 'd6o9rau53ul8j8',
        user: 'mjbrgpfqdvtdps',
        password: '04427e20360d65ea15557b5ea17c995978828f3b11232a67e517589d9a95280f',
        ssl : true,
        rejectUnauthorized : false,
    };
    const db = pgp(cn);
    console.log("After connection");
    return db;
}
function connexion_users() {
    const db = connexion_bdd();
    db.one('SELECT * FROM Users ;', [123])
        .then(user => {
            console.log("Dans le then");
            console.log(user.name); // print user name;
        })
        .catch(error => {
            console.log("Dans le error");
            console.log(error); // print the error;
        });
    return 0;
}






