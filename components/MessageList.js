import React from 'react';
import Message from './Message';

const messageList = (props) => {
   
        return (
            <div className="message-list">
                {props.messages.map((message, index)=>{
                    return <Message 
                                key={index}
                                userName={message.senderId}
                                messageText={message.text}
                            />
                    })
                }
            </div>
        )
}



export default messageList