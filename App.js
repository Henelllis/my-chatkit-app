import React, {state}from 'react'
import Chatkit from '@pusher/chatkit';

import  { tokenUrl , instanceLocator }  from './config';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

class App extends React.Component {
    //Reimplement state into Redux
    state = {
        messages:[],
    }

    componentDidMount () {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'Frogger',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        });

        chatManager.connect()
        .then( currentUser =>{
            currentUser.subscribeToRoom({
                roomId: 11285075,
                hooks:{
                    onNewMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message]
                        })
                        //console.log('message.text: ', message.text );
                    }
                }
            })
        })
        .catch( err =>{
            console.log('error: ', err );
        })
    }

    render() {
        console.log('state.messages: ', this.state.messages);
        return (
            <div className="app">
                <RoomList />
                <MessageList messages={this.state.messages}/>                
                <SendMessageForm  />
                <NewRoomForm />
            </div>
        );
    }
}

export default App