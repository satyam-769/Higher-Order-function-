import { Component } from 'react';
import './App.css';
// import Signup from './signup';
// import RefsInReact from './RefsInReact'
// import Employee from './Employee'
// import Widget from './Widget'
// import ErrorBoundary from './errorBoundary'

// import logo from './logo512.png'
// import RouterDemo from './RouterDemo'
import SignupForm from './signupform'

class App extends Component {
  render(){
  return (
    <div >
    <h1>App Component</h1>
    {/* <RouterDemo/> */}
    <SignupForm/>
      {/* <Signup /> */}
      {/* <RefsInReact/> */}
    
      {/* <ErrorBoundary>
        <Employee/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Widget profileImage=""/>
      </ErrorBoundary> */}
    </div>
  );
}
}
export default App;
