import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Home from './home'
import Membre from './Membre/membre'
import Posts from './Membre/posts'
import Message from './Membre/messages'
import Paramètres from './Membre/param'
import Connexion from "./Connexion";
import Inscription from "./inscription";
const routing = (
    <Router>
        <div id='title'>Smart Assistance <br/>
            <img src={"image/frise.jpg"}/>
        </div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/connexion" component={Connexion}/>
        <Route exact path="/inscription" component={Inscription}/>
        <Route exact path="/membre" component={Membre}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/message" component={Message}/>
        <Route exact path="/param" component={Paramètres}/>

    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))