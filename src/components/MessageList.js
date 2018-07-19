import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Message from './Message';

class MessageList extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.roomId !== this.props.roomId) || (nextProps.messages !== this.props.messages);
    }

    componentWillUpdate(){
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;

    }

    componentDidUpdate(){
        if(this.shouldScrollToBottom){
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight;
        }

    }
   
    render(){
        const messageList = null;


        if( !this.props.roomId ) {
            return (
                <div className="message-list">
                    <div className="join-room">
                         Join a room! &rarr;
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">
                {this.props.messages.map((message, index)=>{
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
}

const mapStateToProps = state => {
    return{
        loading: state.login.loading
    }
}



export default connect(mapStateToProps)(MessageList);