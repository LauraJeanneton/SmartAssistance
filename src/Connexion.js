import React from 'react';
import InputField from "./InputField";
import './css/Connexion.css'


class Connexion extends React.Component {

    constructor() {
        super()
        this.state = {name: ""}
        this.setName = this.setName.bind(this)
    }


    setName(name) {
        this.setState({name: name})
    }

    render() {
        return <div><div id="CoButton">
            <ul>
                <button onClick={this.props.onQuit} className={"connect"}>Accueil</button>
            </ul>
        </div>
            <div id={"Connect"}>

                <h1> Connexion </h1>
                <form action="/connexion" method="post" >
                    <InputField label={"Pseudo"} onChange={this.props.onNameChange} onSubmit={this.props.onLogin} setName={this.setName} autoFocus />
                    <br/>
                    <label> Mot de passe :</label>
                    <input type={"text"} name={"pseudo"} id={"pseudo"}  defaultValue={this.state.name} hidden={true}/>
                    <input type={"text"} name={"password"} id={"password"}/>
                    <br/><br/>
                    <button onClick={this.props.onLogin}>Rejoindre</button>

                </form>

            </div>
        </div>
    }
}

export default Connexion;