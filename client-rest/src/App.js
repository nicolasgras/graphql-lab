import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import config from './config';

import axios from 'axios';

import UserList from './components/UserList';

class App extends Component {
  
  // default State object
  state = {
    users: []
  };
  
  async componentDidMount() {

    let users = [];

    await axios.get(config.graphql.server.host + "/api/users")
    .then(response => users = response.data)
    .catch(e => console.log(e));

    // create a new "State" object without mutating the original State object. 
    const newState = Object.assign({}, this.state, {
      users: users,
    });

    // store the new state object in the component's state
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserList users={this.state.users} />
      </div>        
     );
  }
}

export default App;
