import React from 'react'
import '../../css/membre.css'
import '../../css/posts.css'
import '../../css/newpost.css'
class App extends React.Component {

    render() {
        return (
            <div>
                <div id={"menu"}>
                    <a href="/" className={'home'}>Accueil</a>
                </div>
                <div id={"menu"}>
                    <ul id="menu">
                        <li><a href="/membre">Mon compte</a></li>
                        <li><a href="/posts" className={'actif'}>Mes posts</a></li>
                        <li><a href="/message">Messagerie</a></li>
                    </ul>
                </div>
                {/*A faire : Voir ses posts et agir dessus (ajout, supprimer, modifier)*/}
                <div>
                    <div className="vertical-menu">
                        <a href="/postsPost" className="active">Publier</a>
                        <a href="/posts">Articles publiés</a>
                        <a href="/draft">Brouillons</a>
                        <a href="/archive">Articles archivés</a>
                    </div>
                </div>
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