import React from 'react'
import '../../css/membre.css'
import '../../css/posts.css'
import '../../css/newpost.css'
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
                        <li>
                            <button onClick={this.props.compte}>Mon Compte</button>
                        </li>
                        <li>
                            <button onClick={this.props.onPosts} className={'actif'}>Mes posts</button>
                        </li>
                        <li>
                            <button onClick={this.props.onMessage}>Mes Messages</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="vertical-menu">
                        <button onClick={this.props.onPostsForPublish} className="active">Publier</button>
                        <button onClick={this.props.onPosts} >Articles publiés</button>
                        <button onClick={this.props.onPostsDraft}>Brouillons</button>
                        <button onClick={this.props.onPostsArchive}>Articles archivés</button>
                    </div>
                </div>
                {/*A faire : Voir ses posts et agir dessus (ajout, supprimer, modifier)*/}

                <div id="post">
                    <form action="/posting" method="post">
                        <label> Titre : </label> <input type="text" size="30"/> <br/> <br/>
                        <label> Contenu de l'article : </label> <br/><br/><textarea rows="15" cols="100"></textarea>
                    </form>
                    <ul id="gestionPost">
                        <li><a href="/posts">Publier</a></li>
                        <li><a href="/message">Brouillon</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default App