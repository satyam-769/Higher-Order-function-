import React, { Component } from 'react';

import SignupForm from './signupform';

class Signup extends Component {
    state={
        result:{}
    }

    onSubmit= (value)=>{
        this.setState({result:value});
    }
    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={this.onSubmit}/>
                {/* <h3>{JSON.stringify(this.state.result)}</h3> */}
            </div>
        )
    }
}

export default Signup;