import React from 'react'
import '../../css/membre.css'
class App extends React.Component {
    render() {
        return (
            <div>
                <div id={"menu"}>
                    <a href="/" className={'home'}>Accueil</a>
                </div>
                <div id={"menu"}>
                    <ul id="menu">
                        <li><a href="/membre">Mon compte</a></li>
                        <li><a href="/posts">Mes posts</a></li>
                        <li><a href="/message" class={'actif'}>Messagerie</a></li>
                    </ul>
                </div>
                <div className="vertical-menu">
                    <a href="/newMessage" >Nouveau message</a>
                    <a href="/message" className="active">Conversations actives</a>
                    <a href="/archiveMessage">Conversations archivées</a>
                </div>
            </div>
        )
    }
}
export default App