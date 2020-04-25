import React from 'react';
import Home from './home';
import Connexion from "./Connexion";
import Inscription from './inscription'
import Membre from './Membre/membre'
import Posts from './Membre/Posts/posts'
import NewPost from "./Membre/Posts/newPost";
import Draft from "./Membre/Posts/draft";
import Archive from "./Membre/Posts/archive";
import Message from './Membre/Messagerie/messages'
import MessageArchive from './Membre/Messagerie/messageArchive';
import NouveauMessage from './Membre/Messagerie/newMessage';

class App extends React.Component {


    constructor() {
        super()
        this.state = {name: "", current: "home"}
        this.returnHome = this.returnHome.bind(this)
        this.loginFunc = this.loginFunc.bind(this)
        this.membreFunc = this.membreFunc.bind(this)
        this.postsFunc = this.postsFunc.bind(this)
        this.messageFunc = this.messageFunc.bind(this)
        this.postsForPublish=this.postsForPublish.bind(this)
        this.postsDraft=this.postsDraft.bind(this)
        this.postsArchive=this.postsArchive.bind(this)
        this.messagesArchives=this.messagesArchives.bind(this)
        this.messagesNew=this.messagesNew.bind(this)
        this.quittSession=this.quittSession.bind(this)
        this.inscrFunc=this.inscrFunc.bind(this)
        this.setName = this.setName.bind(this)
    }

    loginFunc() {
        this.setState({current: "login"})
    }

    inscrFunc(){
        this.setState({current: "inscription"})
    }

    membreFunc() {
        this.setState({current: "membre"})
    }

    returnHome(){
        this.setState({current : "home"});
    }

    quittSession(){
        this.setState({name: "" , current : "home"});
    }

    messageFunc(){
        this.setState({current : "message"});
    }

    postsFunc(){
        this.setState({current : "posts"});
    }

    postsForPublish(){
        this.setState({current : "postsPublish"});
    }
    postsDraft(){
        this.setState({current : "postsDraft"});
    }
    postsArchive(){
        this.setState({current : "postsArchive"});
    }

    messagesArchives(){
        this.setState({current : "messagesArchive"});
    }

    messagesNew(){
        this.setState({current : "messagesNew"});
    }


    setName(name) {
        this.setState({name: name})
    }

    render() {
        if(this.state.current==="home"){
                return (
                    <div>
                        <Home onLogin={this.loginFunc} onInscription={this.inscrFunc} name={this.state.name} onMembre={this.membreFunc}/>
                        <div className="vertical-menu">
                            <a href="/" className="active">Home</a>
                            <a href="/indexJob" className="job">Dernier job</a>
                            <a href="/">Link 1</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a>
                            <a href="/">Link 4</a>
                        </div>
                    </div>
                )
        }


    else if(this.state.current === "login")
            return (
                <div>
                    <div className="vertical-menu">
                        <a href="/" className="active">Home</a>
                        <a href="/indexJob" className="job">Dernier job</a>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                        <a href="/">Link 4</a>
                    </div>
                    <Connexion onNameChange={this.setName} getName={this.state.name} onLogin={this.membreFunc} />
                </div>

            )

        else if(this.state.current === "inscription")
            return (
                <div>
                    <div className="vertical-menu">
                        <a href="/" className="active">Home</a>
                        <a href="/indexJob" className="job">Dernier job</a>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                        <a href="/">Link 4</a>
                    </div>
                    <Inscription onNameChange={this.setName} getName={this.state.name} onLogin={this.membreFunc} />
                </div>

            )


        else if(this.state.current === "membre"){
            return <Membre name={this.state.name} onPosts={this.postsFunc} goHome={this.returnHome} onQuit={this.quittSession}  compte={this.membreFunc} onMessage={this.messageFunc}/>
        }

        else if(this.state.current ==="posts"){
            return <Posts name={this.state.name} onPosts={this.postsFunc} onQuit={this.returnHome}  compte={this.membreFunc}onMessage={this.messageFunc}
                          onPostsForPublish={this.postsForPublish} onPostsDraft={this.postsDraft} onPostsArchive={this.postsArchive}/>
        }


        else if(this.state.current ==="postsPublish"){
            return <NewPost name={this.state.name} onPosts={this.postsFunc} onQuit={this.returnHome}  compte={this.membreFunc}onMessage={this.messageFunc}
                            onPostsForPublish={this.postsForPublish} onPostsDraft={this.postsDraft} onPostsArchive={this.postsArchive}/>
        }
        else if(this.state.current ==="postsDraft"){
            return <Draft name={this.state.name} onPosts={this.postsFunc} onQuit={this.returnHome}  compte={this.membreFunc}onMessage={this.messageFunc}
                          onPostsForPublish={this.postsForPublish} onPostsDraft={this.postsDraft} onPostsArchive={this.postsArchive}/>
        }
        else if(this.state.current ==="postsArchive"){
            return <Archive name={this.state.name} onPosts={this.postsFunc} onQuit={this.returnHome}  compte={this.membreFunc}onMessage={this.messageFunc}
                            onPostsForPublish={this.postsForPublish} onPostsDraft={this.postsDraft} onPostsArchive={this.postsArchive}/>
        }
        else if(this.state.current ==="messagesArchive"){
            return <MessageArchive name={this.state.name} onPosts={this.postsFunc} onQuit={this.returnHome}  compte={this.membreFunc} onMessage={this.messageFunc}
                                   onMessageNew={this.messagesNew} onMessageArchive={this.messagesArchives} />
        }
        else if(this.state.current ==="messagesNew"){
            return <NouveauMessage name={this.state.name} onPosts={this.postsFunc} onQuit={this.returnHome}  compte={this.membreFunc}onMessage={this.messageFunc}
                                   onMessageNew={this.messagesNew} onMessageArchive={this.messagesArchives} />
        }

        if(this.state.current ==="message"){
            return <Message name={this.state.name} onPosts={this.postsFunc} onQuit={this.returnHome}  compte={this.membreFunc}onMessage={this.messageFunc}
                            onMessageNew={this.messagesNew} onMessageArchive={this.messagesArchives} />
        }





    }
}

export default App;
