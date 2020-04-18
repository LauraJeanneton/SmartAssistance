import React from 'react'
import '../css/membre.css'
class App extends React.Component {

    getName(){
        return "Laura";
    }

    getVille(){
        return "Marseille";
    }

    getAge(){
        return "21";
    }

    render() {
        return (
            <div>
                <div id={"menu"}>
                    <a href="/" className={'home'} alt="No image">Accueil</a>
                    <a href="/" className={'deconnect'}alt="No image">Se déconnecter</a>
                </div>
                <div id={"menu"}>
                    <ul>
                       <li><a href="/membre" class={'actif'}>Mon compte</a></li>
                       <li><a href="/posts">Mes posts</a></li>
                       <li><a href="/message">Messagerie</a></li>
                    </ul>
                </div>

                <br/><br/>
                <div id="utilisateur">
                    <h3>Utilisateur</h3>
                    Pseudo : {this.getName()}
                    <br/> Ville : {this.getVille()}
                    <br/> Age : {this.getAge()}
                    <br/> Annonces passées :
                    <img src={"../image/perso1.png"}/>
                </div>

                <br/><br/>
                <div id="utilisateur">
                    <div id="param">
                        <h3>Paramètre</h3>
                        <button>Réinitialiser le mot de passe</button>  <button>Changer mon image de profil</button> <br/>
                        <button>Changer de login</button>
                        <button>Changer ma ville</button>
                        <button>Changer mon age</button> <br/>
                    </div>

                </div>

                <div id="text">
                    Merci de faire confiance à mon application d'entraide SmartAssistance. Grâce à elle, vous pouvez faire de bonnes actions ! <br/><br/>
                    Depuis votre compte, vous serez en mesure de gérer votre espace utilisateur, afin de modifier une des informations de votre inscription.
                    Comme vous pouvez le voir, une image de profil vous a été assigné aléatoirement : vous pouvez la changer à tout moment dans vos paramètres.
                    <br/><br/>Dans l'onglet "Mes posts", vous avez accès à toutes les annonces que vous avez publiées. Vous pouvez les consultées, les supprimées
                    et les modifiées. C'est également là que vous pourrez publier de nouvelles annonces. <br/><br/>
                    Enfin, dans l'onglet "Messagerie", vous pourrez gérer vos discussions avec les autres utilisaeurs de SmartAssistance. <br/>
                    <img src={"../image/entete.jpg"}/>
                </div>


            </div>
        )
    }
}
export default App