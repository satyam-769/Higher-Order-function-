import React, { Component } from 'react';

class Widget extends Component {
    render() {
        if(this.props.profileImage===''){
            throw new Error('Image Not Found');
        }
        return (
            <div>
                <h1>Profile Image</h1>
                <img src={this.props.profileImage} alt="profile image"/>
            </div>
        );
    }
}

export default Widget;