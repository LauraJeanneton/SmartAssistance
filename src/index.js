import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './home'
import Connexion from "./Connexion";
import Inscription from "./inscription";
import Membre from './Membre/membre'
import Posts from './Membre/Posts/posts'
import NewPost from "./Membre/Posts/newPost";
import Draft from "./Membre/Posts/draft";
import Archive from "./Membre/Posts/archive";
import Message from './Membre/Messagerie/messages'
import MessageArchive from './Membre/Messagerie/messageArchive';
import NouveauMessage from './Membre/Messagerie/newMessage';
import ConnexionError from './ErrorJs/connexionError';



const routing = (
    <Router>
        <div id='title'>Smart Assistance <br/>
            {/*<img src={"image/frise.jpg"}/>*/}
        </div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/connexion" component={Connexion}/>
        <Route exact path="/inscription" component={Inscription}/>
        <Route exact path="/membre" component={Membre}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/draft" component={Draft}/>
        <Route exact path="/archive" component={Archive}/>
        <Route exact path="/message" component={Message}/>
        <Route exact path="/postsPost" component={NewPost}/>
        <Route exact path="/newMessage" component={NouveauMessage}/>
        <Route exact path="/archiveMessage" component={MessageArchive}/>
            <Route exact path="/connectError" component={ConnexionError}/>

    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))