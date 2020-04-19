import React from 'react'
import Appli from './App'
import './css/Connexion.css'



class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        fetch('/connexion')
            .then(res => res.json())
            .then(list => this.setState({ list }))
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <React.StrictMode>
                    <Appli />
                </React.StrictMode>
                <div id={"Connect"}>

                    <h1> Connexion </h1>
                    <form action={'/connexion'} method={"post"}>
                        <label> Nom d'utilisateur :</label>
                        <input type={'text'} name={"pseudo"} id={"pseudo"}/>
                        <br/><br/>
                        <label> Mot de passe :</label>
                        <input type={"text"} name={"password"} id={"password"}/>
                        <br/><br/>
                        <input type={"submit"} value={"Se connecter"}/>
                    </form>
                    <div>
                        {list.length ? (
                            <div>
                                {/* Render the list of items */}
                                {list.map((item) => {
                                    return(
                                        <div>
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div>
                                <h2>No List Items Found</h2>
                            </div>
                        )
                        }
                    </div>
                    <Cool  adjective={'Génial'}/>
                </div>


            </div>

        )
    }

}

function Cool({adjective='Cool'}){
    return <p>Youpi ca marche ! {adjective}</p>
}
export default App