import React, { Component } from 'react'

class RoomList extends Component  {

        componentDidMount() {
        }

        shouldComponentUpdate( nextProps, nextState){
            if(this.props.rooms){
                return nextProps.rooms !== this.props.rooms
            }
            else{
                return false;
            }

        }

        render() {

            if(this.props.rooms){
                return(
                    <div className="rooms-list">
                    <ul className="rooms-list">
                        <h3>Your Rooms</h3>
                        {[...this.props.rooms].sort((a,b) => a.id - b.id).map(room => {
                            const active = this.props.roomId === room.id ? "active" : "";
                            return (
                                <li key={room.id} className={"room " + active}>
                                    <a  
                                        onActive
                                        onClick={() => {this.props.subscribeToRoom(room.id)}} 
                                        href="#">
                                        # {room.name} 
                                    </a>
                                </li>
                            ) 
                        })}
                    </ul>
                </div>
                )
            }else{
                return(
                    <div className="rooms-list"> 
                        <h1 className="rooms-list">
                            NO ROOMS LOADED
                        </h1>
                    </div>
                )
            }


        }


}

export default RoomList

