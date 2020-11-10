import React from "react";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import MobileUser from './MobileUser';

class MobileUserList extends React.Component {
    
    render() {
        
        const { data: {loading, error, users } } = this.props;
        
        console.log("===================== MobileUserList.render =====================");
    
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
                {users.map(u => <MobileUser key={u.id} user={u}/>)}
            </div>
        );
    }
}

const mobileUserListQuery = gql`
query mobileUserListQuery {
    users {
        id
        email
        projects {
          name
          tasks {
            description
          }
        }
    }
}
`;

export default graphql(mobileUserListQuery)(MobileUserList);