import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import pink from '@material-ui/core/colors/pink';

const styles = {
    row: {
    //   display: 'inline',
    justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    pinkAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: pink[500],
      },
  };

class OnlineUsersList extends Component{
   
    shouldComponentUpdate(nextProps, nextState){
       return nextProps.onlineUsers !== this.props.onlineUsers ;
    };

    render() {

        const {classes} = this.props;

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
                    {[...this.props.onlineUsers].filter( user => this.props.user.name !== user)
                        .map(
                            user => {
                                return (
                                    <li key={user} className='user'>
                                        <div className={classes.row}>
                                            <a><Avatar className={classes.pinkAvatar}>{user.charAt(0)}</Avatar><p style={{float:'right',marginTop:'-40px', marginRight:'100px'}}>{user}</p></a>
                                        </div>
                                    </li>
                                )
                            }
                        )}
                </ul>
            </div>
        );
    }
};

OnlineUsersList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => {
    return{
        user: state.login.currentUser,
    }
}


export default connect(mapStateToProps)(withStyles(styles)(OnlineUsersList));