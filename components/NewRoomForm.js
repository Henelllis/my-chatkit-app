import React from 'react'

class NewRoomForm extends React.Component {
    state={
        roomName:''
    }
    
    onChangeHandler = event=> {
        this.setState({
            roomName:event.target.value
        })
    }

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.createRoom(this.state.roomName);
        this.setState({
            roomName:''
        })
    }

    render () {
        return (
            <div className="new-room-form">
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        onChange={this.onChangeHandler}
                        type="text" 
                        value={this.state.roomName}
                        placeholder="NewRoomForm" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
        )
    }
}

export default NewRoomForm