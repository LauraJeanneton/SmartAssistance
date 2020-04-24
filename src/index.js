import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import {Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Membre from './Membre/membre';
import Connexion from './Connexion';


const routing = (
    <Router>
        <div id='title'>Smart Assistance <br/>
            {/*<img src={"image/frise.jpg"}/>*/}
        </div>
            <App></App>
        {/*<Route exact path="/" component={Home}/>*/}
        {/*<Route exact path="/home" component={Home}/>*/}
        {/*<Route path="/connexion" component={Connexion}/>*/}
        {/*<Route exact path="/inscription" component={Inscription}/>*/}
        <Route exact path="/membre" component={<App/>}/>
        {/*/!*<Route exact path="/posts" component={Posts}/>*!/*/}
        {/*<Route exact path="/draft" component={Draft}/>*/}
        {/*<Route exact path="/archive" component={Archive}/>*/}
        {/*<Route exact path="/message" component={Message}/>*/}
        {/*<Route exact path="/postsPost" component={NewPost}/>*/}
        {/*<Route exact path="/newMessage" component={NouveauMessage}/>*/}
        {/*<Route exact path="/archiveMessage" component={MessageArchive}/>*/}
        {/*<Route exact path="/connectError" component={ConnexionError}/>*/}

    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

