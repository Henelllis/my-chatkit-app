import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'Hendude',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'Reptyl',
        text: 'Great! How about you?'
    },
    {
        senderId: 'Hendude',
        text: 'Good to hear! I am great as well'
    }
]

const MessageList = () => {
   
        return (
            <div className="message-list">
            {DUMMY_DATA.map((message, index)=>{
                return (<div className="message" key={index}>
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                    </div>)
            })}
            </div>
        )
}

export default MessageList