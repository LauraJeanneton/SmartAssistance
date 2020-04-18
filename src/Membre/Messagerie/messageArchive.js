import React from 'react'
import '../../css/membre.css'
class App extends React.Component {
    render() {
        return (
            <div>
                <div id={"menu"}>
                    <a href="/" className={'home'}>Accueil</a>
                    <a href="/" className={'deconnect'}>Se déconnecter</a>
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
                    <a href="/message" >Conversations actives</a>
                    <a href="/archiveMessage" className="active">Conversations archivées</a>
                </div>
            </div>
        )
    }
}
export default App