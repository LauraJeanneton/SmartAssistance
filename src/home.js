import React from 'react'
import Appli from './App'
import './css/Connexion.css'
class App extends React.Component {
    render() {
        return (
            <div>
                <form action="/connexion" method="get">
                    <button>Se Connecter</button>
                </form>

                <form action="/inscription" method="get">
                    <button>S'inscrire</button>
                </form>
                <React.StrictMode>
                    <Appli />
                </React.StrictMode>

            </div>

        )
    }
}
export default App