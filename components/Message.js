import React from 'react'

const message = (props) => {
    return (
        <div className="message">
          <div className="message-username">{props.userName}</div>
          <div className="message-text">{props.messageText}</div>
        </div>
    )
}

export default message