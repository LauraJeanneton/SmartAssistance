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
                    <a href="/" className={'home'}>Accueil</a>
                </div>
                <div id={"menu"}>
                    <ul id="menu">
                        <li><a href="/membre" >Mon compte</a></li>
                        <li><a href="/posts" class={'actif'}>Mes posts</a></li>
                        <li><a href="/message">Messagerie</a></li>
                    </ul>
                </div>
                {/*A faire : Voir ses posts et agir dessus (ajout, supprimer, modifier)*/}
                <div>
                    <div className="vertical-menu">
                        <a href="/postsPost" className="publier">Publier</a>
                        <a href="/posts" >Articles publiés</a>
                        <a href="/draft" >Brouillons</a>
                        <a href="/archive" className="active">Articles archivés</a>
                    </div>
                </div>
                {this.getArticle()}{this.getArticle()}
            </div>
        )
    }
}
export default App