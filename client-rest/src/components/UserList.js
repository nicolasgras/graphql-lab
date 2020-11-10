import React from "react";
import User from "./User";

class UserList extends React.Component {

    render() {
        
        return (
            <div>
                {this.props.users.map(u => <User key={u.id} user={u} />)}            
            </div>
        );
    }
}

export default UserList;