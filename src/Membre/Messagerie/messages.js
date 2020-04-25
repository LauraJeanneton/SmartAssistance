import React from 'react'
import '../../css/membre.css'
class App extends React.Component {

    getMessage(){
        return(<div id="article">
            <h3 id="titre">Correspondant 1</h3>

            <div id="gestion">
                <ul>
                    <li><a href="/postsModif">Voir la conversation</a></li>
                    <li><a href="/postsSuppr">Supprimer</a></li>
                    <li><a href="/postsArch">Archiver</a></li>
                </ul>
            </div>
        </div>)
    }
    render() {
        return (
            <div>
                <div id={"menu"}>
                    <button onClick={this.props.onQuit} className={'home'}>Accueil</button>
                    <button onClick={this.props.onQuit} className={'deconnect'}>Se Déconnecter</button>
                </div>
                <div id={"menu"}>
                    <ul id="menu">
                        <li><button onClick={this.props.compte}>Mon Compte</button></li>
                        <li><button onClick={this.props.onPosts} >Mes posts</button></li>
                        <li><button onClick={this.props.onMessage} className={'actif'}>Mes Messages</button></li>
                    </ul>
                </div>
                <div className="vertical-menu">
                    <button onClick={this.props.onMessageNew}>Nouveau message</button>
                    <button onClick={this.props.onMessage} className={"active"}>Conversations actives</button>
                    <button onClick={this.props.onMessageArchive}>Conversations archivées</button>
                </div>
                {this.getMessage}{this.getMessage}
            </div>
        )
    }
}
export default App