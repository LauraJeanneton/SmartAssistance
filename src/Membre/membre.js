import React from 'react';
import '../css/membre.css'
import '../css/App.css'
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3000');

class Membre extends React.Component {
    constructor(props) {
        super(props)
        this.state = {messages: []}
        this.submitMessage = this.submitMessage.bind(this);
        this.addMessages = this.addMessages.bind(this);
            socket.emit('set-name', this.props.name);
        socket.on('add-messages', (messages) => this.addMessages(messages))
      //  this.chat.onMessages(this.addMessages)
    }

    addMessages(messages) {
        this.setState((state, props) => ({
            messages: state.messages.concat(messages)
        }))
    }

    submitMessage(text) {
        this.chat.sendMessage(text)
    }


    render() {
        return (
            <div>
                <div id={"menu"}>
                    <button onClick={this.props.goHome} className={'home'}>Accueil</button>
                    <button onClick={this.props.onQuit}class={'deconnect'}>Se Déconnecter</button>
                </div>
                <div id={"menu"}>
                    <ul>
                        <li><button onClick={this.props.compte} class={'actif'}>Mon Compte</button></li>
                        <li><button onClick={this.props.onPosts}>Mes posts</button></li>
                        <li><button onClick={this.props.onMessage}>Mes Messages</button></li>
                    </ul>
                </div>
                <br/><br/>
                <div id="utilisateur">
                    <h3>Utilisateur</h3>
                    Pseudo : {this.props.name}
                    <br/> Ville :
                    <br/> Age :
                    <br/> Annonces passées :
                    <img src={"../image/perso1.png"} alt="No bb"/>
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
                    <img src={"../image/entete.jpg"} alt="No ddimage"/>
                </div>


            </div>
        );
    }
}

export default Membre;