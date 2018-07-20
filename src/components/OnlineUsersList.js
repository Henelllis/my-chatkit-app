import React , { Component } from 'react';

import OnlineUser from './OnlineUser';

class OnlineUsersList extends Component{

    shouldComponentUpdate(nextProps, nextState){
       return nextProps.onlineUsers !== this.props.onlineUsers ;
    };

    render() {
        if(this.props.onlineUsers.length === 0){
            return(
                <div className='online-users-list'>
                   <h3> LOG INTO A ROOM TO SEE FRIENDS </h3>
                </div>
            )
        }
    
        return(
            <div className='online-users-list'>
                <ul className='online-users-list'>
                    <h3> Online Buddies</h3>
                    {[...this.props.onlineUsers].map(
                        user => {
                            return (
                                <li key={user} className='user'>
                                    <a>{user}</a>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        );
    }
};

export default OnlineUsersList;