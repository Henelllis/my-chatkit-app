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
        joinedRooms:[],
        roomId: ''
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
            this.getJoinableRooms();
        })
        .catch( err =>{
            console.log('[Connection]: ', err );
        })
    }

    getJoinableRooms = () => {
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
            })
        })
        .catch(error => {
            console.log('[ERROR FETCHING ROOMS]: ', error);
        });
    }

    subscribeToRoom = (roomId) => {
        this.setState({messages:[]});
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks:{
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then( room => {
            this.setState({roomId: room.id});
            this.getJoinableRooms();
        })
        .catch( error => {
            console.log('[ERROR SUBSCRIBING ROOM]: ', error);
        })
    }

    sendMessage = (text) => {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        });
    }

    createRoom = (name) => {
        this.currentUser.createRoom({
            name
        })
        .then(room =>{
            this.subscribeToRoom(room.id)
        })
        .catch(error => {
            console.log('ERROR CREATING NEW ROOM ' , error)
        });
    }

    render() {
        return (
            <div className="app">
                <RoomList 
                          roomId={this.state.roomId}
                          subscribeToRoom={this.subscribeToRoom}
                          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
                <MessageList
                    roomId={this.state.roomId} 
                    messages={this.state.messages}/>                
                <SendMessageForm
                    disabled={!this.state.roomId} 
                    onSendMessage={this.sendMessage} />
                <NewRoomForm createRoom={this.createRoom}/>
            </div>
        );
    }
}

export default App