import React from 'react'

const RoomList = (props) =>  {
        return (
            <div className="rooms-list">
                <ul className="rooms-list">
                    <h3>Your Rooms</h3>
                    {props.rooms.map(room => {
                        return (
                            <li key={room.id} className="room">
                                <a href="#"># {room.name} </a>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        )
}

export default RoomList

