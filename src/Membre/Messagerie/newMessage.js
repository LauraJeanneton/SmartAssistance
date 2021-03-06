import React from 'react'
import '../../css/membre.css'
import '../../css/posts.css'
class App extends React.Component {
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
                    <button onClick={this.props.onMessageNew}className={"active"}>Nouveau message</button>
                    <button onClick={this.props.onMessage} >Conversations </button>
                </div>
                <div id="post">
                    <form action="/posting" method="post">
                        <label> Nom du destinataire : </label> <input type="text" size="30"/> <br/> <br/>
                        <label> Message : </label> <br/><br/><textarea rows="15" cols="100"></textarea>
                    </form>
                    <ul id="gestion">
                        <button onClick={this.props.onMessage}>Envoyer</button>
                    </ul>
                </div>
            </div>
        )
    }
}
export default App