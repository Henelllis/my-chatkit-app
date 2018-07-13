import React, { Component } from 'react';

class Layout extends Component {

    render() {
        return(
            <div>
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
        )
    }

}

export default Layout;