import React from 'react'
import Appli from './App'
import './css/Connexion.css'
import InputField from "./InputField";

class App extends React.Component {

    constructor() {
        super()
        this.state = {name: ""}
        this.setName = this.setName.bind(this)
    }


    setName(name) {
        this.setState({name: name})
    }


    render() {
        return (
            <div>
                <React.StrictMode>
                    <Appli />
                </React.StrictMode>
            <div id={"Connect"}>
                <h1> Inscription </h1>
                <form action="/inscription" method="post" >
                    <InputField label={"Pseudo"} onChange={this.props.onNameChange} onSubmit={this.props.onLogin} setName={this.setName} autoFocus />
                    <br/><br/>
                    <input type={"text"} name={"pseudo"} id={"pseudo"}  defaultValue={this.state.name} hidden={true}/>
                    <label>Prenom d'usage :</label>
                    <input type={"text"} id={"name"} name={"name"}/>
                    <br/><br/>
                    <label> Mot de passe :</label>
                    <input type={"text"} name={"password"} name={"password"}/>
                    <br/><br/>
                    <label>Votre ville:</label>
                    <input type={"text"} id={"city"} name={"city"}/>
                    <br/><br/>
                    <label>Votre age:</label>
                    <input type={"number"} id={"age"} name={"age"}/>
                    <br/><br/>
                    <input type={"submit"} value={"S'inscrire"}/>
                </form>
            </div>
            </div>
        )
    }
}
export default App