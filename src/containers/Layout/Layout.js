import React, { Component } from 'react';
import MessageList from '../../components/MessageList'
import SendMessageForm from '../../components/SendMessageForm'
import RoomList from '../../components/RoomList'
import NewRoomForm from '../../components/NewRoomForm'

class Layout extends Component {

    render() {
        return(
            <div className="layout">
                YOOOOOOOOOOOOOO
                <MessageList />
                <SendMessageForm />
                <RoomList />
                <NewRoomForm/>
            </div>
        )
    }

}

export default Layout;


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