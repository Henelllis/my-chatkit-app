import React from 'react'

class SendMessageForm extends React.Component {
    
    state = {
        message: ''
    };

    onHandleChange = event => {
        this.setState({
            message:event.target.value
        });
    };

    onHandleSubmit = event =>  {
        event.preventDefault();
        this.props.onSendMessage(this.state.message);
        this.setState({message: ''});
    }

    render() {
        return (
            <form
                onSubmit= {this.onHandleSubmit}
                className= "send-message-form">
                <input
                    onChange= {this.onHandleChange}
                    value= {this.state.message}
                    placeholder= "Type out your message"
                    type= "text" />
            </form>
        )
    };
}

export default SendMessageForm;