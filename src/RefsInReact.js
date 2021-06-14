import React, { Component } from 'react';

class RefsInReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password:''
        };
        this.textInput = React.createRef();
    }
    handleSubmit=(event) =>{
        event.preventDefault()
        // this.props.onSubmit(this.state)
        this.textInput.current.focus();
        const key=this.textInput.current.name;
        const value=this.textInput.current.value;
        this.setState({
            [key]:value
        })
      }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h1>sign-up-form</h1>
                <label>
                Name:
                    <input placeholder="Enter Name"
                    type="text" name="name" ref={this.textInput}/></label>
                <br/><br/>
                <label>
                Email:
                    <input placeholder="Enter Email"
                    name="email"
                    type="email" /></label><br/><br/>
                <label>
                Password:
                    <input placeholder="Enter Password"
                    name="password"
                    type="password" /></label><br/><br/>
                <button 
                type="submit">Submit</button>
        
            </form>
            <h4>Name: {this.state.name}</h4>
           
        </div>
        );
    }
}

export default RefsInReact;