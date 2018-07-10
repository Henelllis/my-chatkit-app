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
        joinableRooms:[],
        joinedRooms:[]
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
            this.currentUser = currentUser;

            //TODO break into own function
            this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({joinableRooms,
                                joinedRooms: this.currentUser.rooms
                })
            })
            .catch(error => {
                console.log('[ERROR FETCHING ROOMS]: ', error);
            });

            this.currentUser.subscribeToRoom({
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
            console.log('[Connection]: ', err );
        })
    }

    sendMessage = (text) => {
        this.currentUser.sendMessage({
            text,
            roomId: 11285075
        });
    }

    render() {
        return (
            <div className="app">
                <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
                <MessageList messages={this.state.messages}/>                
                <SendMessageForm onSendMessage={this.sendMessage} />
                <NewRoomForm />
            </div>
        );
    }
}

export default App