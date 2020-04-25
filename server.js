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

const { Client } = require('pg');
const connectionString = 'postgres://mjbrgpfqdvtdps:04427e20360d65ea15557b5ea17c995978828f3b11232a67e517589d9a95280f@ec2-18-233-137-77.compute-1.amazonaws.com:5432/d6o9rau53ul8j8';
const client = new Client({
    connectionString: connectionString
});
client.connect();

const logger = null;

app.get('/', (req, ) => {
    return res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    next();
});

app.get('/connexion', function(req, res) {
    const messages = [{name: 'bot', text: 'Bienvenue.'}];

});


app.post('/connexion', function(req, res) {
    console.log("Pseudo :" + req.body.pseudo);
    console.log("Password :" + req.body.password);
    client.query('SELECT login from USERS where login=$1 and password = md5($2);',[req.body.pseudo,req.body.password], function (err, result) {
        if (err) {
            console.log("C'est l'erreur : " + err);
        }
        if (result.rows[0]!=undefined) {
        }
        else {
            res.redirect('connexion');
        }
    });
    return;
});

app.post('/inscription', function(req, res) {
    const login = req.body.pseudo;
    const nameUser = req.body.name;
    const city =req.body.city;
    const age =req.body.age;
    const password = req.body.password;

    client.query('insert into users(login,name,city,age,password) values($1,$2,$3,$4,md5($5));',[login,nameUser,city,age,password], function (err, result) {
        if (err) {
            console.log("C'est l'erreur : " + err);
        }
    });
    return;
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



function requetes(){
    const login = req.body.pseudo;
    const nameUser = req.body.name;
    const city =req.body.city;
    const age =req.body.age;
    const password = req.body.password;
    client.query('select city from users where login = $1;',[login], function (err, result) {
        if (err) {
            console.log("C'est l'erreur : " + err);
        }
    });
    client.query('select age from users where login = $1;',[login], function (err, result) {
        if (err) {
            console.log("C'est l'erreur : " + err);
        }
    });
    client.query('select count(a.idArticle) NbPost from article a, users u where u.login = $1 and u.id=a.id;',[login], function (err, result) {
        if (err) {
            console.log("C'est l'erreur : " + err);
        }
    });
    //insert into article(id,title,text,status,date) values($1,$2,$3,$4,now());
    //select a.title,a.text from article a, users u where u.id=a.id and u.login=$1 and a.status='post';
    //select a.title,a.text from article a, users u where u.id=a.id and u.login=$1 and a.status='draft';
    //select a.title,a.text from article a, users u where u.id=a.id and u.login=$1 and a.status='archive';
    //insert into messaging values($1,$2,$3,now());
   // select distinct m.idTo, m.text from messaging m ,users u, users u2 where u.login=$1 and u2.login=$2 and ((u.id=m.idFrom and u2.id=m.idTo)or (u2.id=m.idFrom and u.id=m.idTo));
    //select u.login, a.title,a.text ,a.date from article a, users u where u.id=a.id order by  date DESC;
}


