import React from 'react'
import '../../css/membre.css'
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
                    <button onClick={this.props.onMessageNew}>Nouveau message</button>
                    <button onClick={this.props.onMessage} >Conversations actives</button>
                    <button onClick={this.props.onMessageArchive}className={"active"}>Conversations archivées</button>
                </div>
            </div>
        )
    }
}
export default App