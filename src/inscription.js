import React from 'react'
import Appli from './App'
import './css/Connexion.css'
class App extends React.Component {
    render() {
        return (
            <div>
                <React.StrictMode>
                    <Appli />
                </React.StrictMode>
            <div id={"Connect"}>
                <h1> Inscription </h1>
                <form method={"post"}>
                    <label> Nom d'utilisateur :</label>
                    <input type={'text'} name={"pseudo"}/>
                    <br/><br/>
                    <label>Prenom d'usage :</label>
                    <input type={"text"} id={"name"}/>
                    <br/><br/>
                    <label> Mot de passe :</label>
                    <input type={"text"} name={"password"}/>
                    <br/><br/>
                    <label>Votre ville:</label>
                    <input type={"text"} id={"city"}/>
                    <br/><br/>
                    <label>Votre age:</label>
                    <input type={"number"} id={"age"}/>
                    <br/><br/>
                    <input type={"submit"} value={"S'inscrire"}/>
                </form>
            </div>
            </div>
        )
    }
}
export default App