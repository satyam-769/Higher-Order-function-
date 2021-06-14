import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SignupForm from './signupform'

class RouterDemo extends Component {
    state={
        result:{}
    }

    onSubmit= (value)=>{
        this.setState({result:value});
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/userdata">User Data</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <SignupForm onSubmit={this.onSubmit}/>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/userdata" component={UserData}/>
                    <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export function UserData(props) {
    return (
        <div>
            <h1>user data</h1>
            <h3>{props.stateData}</h3>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
export default RouterDemo;