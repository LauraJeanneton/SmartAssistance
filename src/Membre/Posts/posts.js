import React from 'react'
import '../../css/membre.css'
import '../../css/posts.css'
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
                    <li><a href="/postsModif">Modifier</a></li>
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
                        <li><button onClick={this.props.onPosts} class={'actif'}>Mes posts</button></li>
                        <li><button onClick={this.props.onMessage}>Mes Messages</button></li>
                    </ul>
                </div>
                <div>
                    <div className="vertical-menu">
                        <button onClick={this.props.onPostsForPublish} className="publier">Publier</button>
                        <button onClick={this.props.onPosts} className="active">Articles publiés</button>
                        <button onClick={this.props.onPostsDraft}>Brouillons</button>
                        <button onClick={this.props.onPostsArchive}>Articles archivés</button>
                    </div>
                </div>

                {this.getArticle()} {this.getArticle()}
            </div>
        )
    }
}
export default App