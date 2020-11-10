import React from "react";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import User from './User';

class UserList extends React.Component {

    


    render() {

        const { data: {loading, error, users } } = this.props;
        
        console.log("===================== UserList.render =====================");
    
        console.log(" - loading");
        console.log(loading);
        console.log(" - error");
        console.log(error);
        console.log("- users");
        console.log(users);
        console.log("- this.props");
        console.log(this.props);
        
        if (loading) {
            return <p>Loading ...</p>;
          }
          if (error) {
            return <p>{error.message}</p>;
          }
        
        return (
            <div>
                {users.map(u => <User key={u.id} user={u}/>)}
            </div>
        );

    }
}

const userListQuery = gql`
    query userListQuery {
        users {
            id
            firstname
            lastname
            email
            projects {
              id
              name
              tasks {
                id
                description
              }
            }
        }
    }
`;

export default graphql(userListQuery)(UserList);