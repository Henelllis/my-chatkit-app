import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chatkit, {getJoinableRooms} from '@pusher/chatkit';

import MessageList from '../../components/MessageList'
import SendMessageForm from '../../components/SendMessageForm'
import RoomList from '../../components/RoomList'
import NewRoomForm from '../../components/NewRoomForm'

class Layout extends Component {

    state ={
        messages:[],
        joinableRooms:[],
        joinedRooms:[],
        roomId: ''
    }


    //Component did Mount
    componentDidMount(){
       this.getJoinableRooms();

    }

    getJoinableRooms = () => {
        this.props.user.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                    joinableRooms,
                    joinedRooms: this.props.user.rooms
            })
        })
        .catch(error => {
            console.log('[ERROR FETCHING ROOMS]: ', error);
        });
    }

    subscribeToRoom = (roomId) => {
 
        this.setState({messages:[]});
        this.props.user.subscribeToRoom({
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
        this.props.user.sendMessage({
            text,
            roomId: this.state.roomId
        });
    }

    createRoom = (name) => {
        this.props.user.createRoom({
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
        return(
            <div className="layout">
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
                <NewRoomForm
                    createRoom={this.createRoom}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return{
        user: state.login.currentUser,
    }
}

export default connect(mapStateToProps)(Layout);


                // {/* <RoomList /> */}
                //     {/* roomId={this.state.roomId}
                //     subscribeToRoom={this.subscribeToRoom}
                //     rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/> */}
                // {/* <MessageList /> */}
                //     {/* roomId={this.state.roomId} 
                //     messages={this.state.messages}/>                 */}
                //     <SendMessageForm
                //     // disabled={!this.state.roomId} 
                //     // onSendMessage={this.sendMessage} 
                //     />
                // <NewRoomForm 
                // // createRoom={this.createRoom}
                // />