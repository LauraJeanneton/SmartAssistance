import React from 'react'
import '../../css/membre.css'
class App extends React.Component {

    getArticle(){
        return(<div id="article">
            <h3 id="titre">Titre article</h3>
            <p id="texteArticle"> Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
            </p>
            <div id="gestion">
                <ul>
                    <li><a href="/postsPost">Publier</a></li>
                    <li><a href="/postsSuppr">Supprimer</a></li>
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
                        <button onClick={this.props.onPostsForPublish} className="publier">Publier</button>
                        <button onClick={this.props.onPosts} >Articles publiés</button>
                        <button onClick={this.props.onPostsDraft} className={"active"}>Brouillons</button>
                        <button onClick={this.props.onPostsArchive}className={"active"}>Articles archivés</button>
                    </div>
                </div>
                {this.getArticle()}{this.getArticle()}
            </div>
        )
    }
}
export default App