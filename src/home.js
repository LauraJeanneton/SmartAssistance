import React from 'react'
import './css/Connexion.css'
class App extends React.Component {
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

                </div>
            )
        }

    }
}
export default App