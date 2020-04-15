import React from 'react'
import Appli from './App'
import './css/Connexion.css'
class App extends React.Component {
    render() {
        return (
            <div>
                <div id="CoButton">
                    <ul>
                        <li><a href="/connexion">Se Connecter</a></li>
                        <li><a href="/inscription">S'inscrire</a></li>
                    </ul>
                </div>

                <React.StrictMode>
                    <Appli />
                </React.StrictMode>

            </div>

        )
    }
}
export default App