import React, { Component } from "react";
// import {UserData} from './RouterDemo'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password:''
        };
    }

    handleChange=(event) =>{
        this.setState({[event.target.name]: event.target.value});
      }

    // handleNameChange=(event) =>{
    //     this.setState({name: event.target.value});
    //   }

    // handleEmailChange=(event) =>{
    //     this.setState({email: event.target.value});
        
    // }

    // handlePasswordChange=(event)=> {
    //     this.setState({password: event.target.value});
    //     }

    handleSubmit=(event) =>{
        alert('You are Successfully SignUp ');
        // console.log("state: ", JSON.stringify(this.state));
        // this.setState({
        //     name: "",
        //     email: "",
        //     password: ""
        // })
        event.preventDefault()
        // this.props.onSubmit(this.state)
      }

  render() {
    // const {data} = this.state;
    console.log(this.state)
    return (
        <div>            
            <form onSubmit={this.handleSubmit}>
                <h1>sign-up-form</h1>
                <label>
                Name:
                    <input placeholder="Enter Name"
                    type="text" name="name" onChange={this.handleChange}/></label>
                <br/><br/>
                <label>
                Email:
                    <input placeholder="Enter Email"
                    name="email"
                    type="email" onChange={this.handleChange}/></label><br/><br/>
                <label>
                Password:
                    <input placeholder="Enter Password"
                    name="password"
                    type="password" onChange={this.handleChange}/></label><br/><br/>
                <button 
                type="submit">Submit</button>
        
            </form>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/userdata">User Data</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/userdata"><UserData {...this.state}/></Route>
                    <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </Router>
            {/* <div>
                <UserData {...this.state}/>
            </div> */}
            
        </div>
    );
  }
}
function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

function UserData(props) {
    return (
        <div>
            <h1>user data</h1>
            <h3>Name: {props.name}</h3>
            <h3>Email: {props.email}</h3>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
export default SignupForm;