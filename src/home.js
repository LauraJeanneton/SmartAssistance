import React from 'react'
import './css/Connexion.css'
class App extends React.Component {

    getArticleConnect(){

        return(<div id="articleHome">
            <h3 id="titre">TITRE DE L'ARTICLE par UTILISATEUR - date Article</h3>
            <p id="texteArticle"> Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
            </p>
            <div id="gestion">
                <ul>
                    <li><button onClick={this.props.onPosts} className={"active"}>Envoyer un message</button></li>
                </ul>
            </div>
        </div>)
    }

    getArticleDisConnect(){

        return(<div id="articleHome">
            <h3 id="titre">TITRE DE L'ARTICLE par UTILISATEUR - date Article</h3>
            <p id="texteArticle"> Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
                Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.Ceci est le texte de l'article.
            </p>

        </div>)
    }


    render() {
        if(this.props.name==""){
            return (
                <div>
                    <div id="CoButton">
                        <ul>
                            <button onClick={this.props.onLogin} className={"connect"}>Connexion</button>
                            <button onClick={this.props.onInscription} className={"inscription"}>Inscription</button>
                        </ul>
                    </div>
                    {this.getArticleDisConnect()}{this.getArticleDisConnect()}{this.getArticleDisConnect()}
                </div>
            )
        }
        else {
            return (
                <div>
                    <div id="CoButton">
                        <ul>
                            <button onClick={this.props.onMembre}>Mon compte : {this.props.name}</button>
                        </ul>
                    </div>
                    {this.getArticleConnect()}{this.getArticleConnect()}{this.getArticleConnect()}
                </div>
            )
        }

    }
}
export default App