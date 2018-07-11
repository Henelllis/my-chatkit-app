import React from 'react'

const RoomList = (props) =>  {
        return (
            <div className="rooms-list">
                <ul className="rooms-list">
                    <h3>Your Rooms</h3>
                    {[...props.rooms].sort((a,b) => a.id - b.id).map(room => {
                        const active = props.roomId === room.id ? "active" : "";
                        return (
                            <li key={room.id} className={"room " + active}>
                                <a  
                                    onActive
                                    onClick={() => {props.subscribeToRoom(room.id)}} 
                                    href="#">
                                    # {room.name} 
                                </a>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        )
}

export default RoomList

