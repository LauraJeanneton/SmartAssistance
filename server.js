const express  = require("express");
var bodyParser = require("body-parser");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname+'/src'));
app.use(express.static('src'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

// const { Client } = require('pg');
// const connectionString = 'postgres://mjbrgpfqdvtdps:04427e20360d65ea15557b5ea17c995978828f3b11232a67e517589d9a95280f@ec2-18-233-137-77.compute-1.amazonaws.com:5432/d6o9rau53ul8j8';
// const client = new Client({
//     connectionString: connectionString
// });
// client.connect();

const logger = null;

app.get('/', (req, res) => {
    return res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    next();
});



app.get('/connexion', function(req, res) {
    res.redirect('connexion');
});

app.post('/connexion', function(req, res) {
    // console.log("Pseudos :"+req.body.pseudo);
    // console.log("Password :"+ req.body.password);
    // client.query('SELECT login from USERS where login=$1 and password = md5($2);',[req.body.pseudo,req.body.password], function (err, result) {
    //     if (err) {
    //         console.log("C'est l'erreur : " + err);
    //     }
    //     if (result.rows[0]!=undefined) {
    //         res.redirect('membre');
    //     }
    //     else res.redirect('connexion');
    // });
    res.redirect('membre');
});

app.post('/inscription', function(req, res) {
    // client.query('SELECT login from USERS where login=$1;',['machin'], function (err, result) {
    //     if (err) {
    //         console.log("C'est l'erreur : " + err);
    //     }
    //     if (result.rows[0]!=undefined) res.redirect('membre');
    //     else res.redirect('connexion');
    // });
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



function inscrFunc(){
    client.query('INSERT INTO USERS (login,name,city,age,password)VALUES (\'Laura\',\'Laura\',\'Marseille\',25,md5(\'test\'));', function (err, result) {
        if (err) {
            console.log("C'est l'erreur : "+ err);
        }
        console.log("Apres erreur");
    });
}


