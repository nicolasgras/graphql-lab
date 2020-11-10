import React, { Component } from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

import gql from "graphql-tag";

import logo from './logo.svg';
import './App.css';

import UserList from './components/UserList';
import MobileUserList from './components/MobileUserList'

const graphqlClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

graphqlClient.query(
  {
    query: gql`
      query UsersQuery {
        users {
          id
          firstname
        }
      }
    `
}
).then(data => {
  console.log("==========================");
  console.log({data});
  console.log("==========================");
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ApolloProvider client={graphqlClient}>
          {/* <UserList /> */}
          <BrowserRouter>
          <div className="App">
            <Link to="/userList" className="App-navbar">Desktop User List</Link>
            <Link to="/mobileUserList" className="App-navbar">Mobile User List</Link>
            <Switch>
              <Route path="/userList" component={UserList}/>
              <Route path="/mobileUserList" component={MobileUserList}/>
            </Switch>
          </div>
        </BrowserRouter>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
