import React from 'react'
import '../css/membre.css'
class App extends React.Component {
    render() {
        return (
            <div>
                <a href="/" className={'home'}>Accueil</a>
                <div id={"menu"}>

                    <ul id="menu">

                        <li>
                            <a href="/membre" >Mon compte</a>
                        </li>
                        <li>
                            <a href="/posts" class={'actif'}>Mes posts</a>
                        </li>

                        <li>
                            <a href="/message">Messagerie</a>
                        </li>
                        <li>
                            <a href="/param">Paramètres</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default App