import React from 'react';
import InputField from "./InputField";
import './css/Connexion.css'


class Connexion extends React.Component {
    render() {
        return <div>
            <div id={"Connect"}>

                <h1> Connexion </h1>
                <form action="/connexion" method="post">
                    <InputField label="pseudo" onChange={this.props.onNameChange} onSubmit={this.props.onLogin} autoFocus />
                    <br/>
                    <label> Mot de passe :</label>
                    <input type={"text"} name={"password"} id={"password"}/>
                    <br/><br/>
                    <button onClick={this.props.onLogin}>Rejoindre</button>

                </form>

            </div>
        </div>
    }
}

export default Connexion;