import React from 'react'
import '../../css/membre.css'
import '../../css/posts.css'
class App extends React.Component {

    getMessage(number){
        return(<div id="article">


            <div id="gestion">
                <ul>
                    <li><h3 id="titre">Correspondant {number}</h3></li>
                    <li><button onClick={this.props.onMessage} className={"active"}>Voir message</button></li>
                    <li><button onClick={this.props.onMessage} className={"active"}>Supprimer</button></li>
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
                    <button onClick={this.props.onMessage} className={"active"}>Conversations</button>
                </div>
                {this.getMessage(1)}{this.getMessage(2)}{this.getMessage(3)}{this.getMessage(4)}
            </div>
        )
    }
}
export default App