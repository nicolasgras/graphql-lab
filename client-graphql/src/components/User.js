import React from "react";

import './User.css';
import ProjectList from "./ProjectList";

function User(props) {
    
    let user = props.user;

    return (
        <div className="user">
            <span>{user.firstname} {user.lastname} ({user.email}) [id={user.id}]</span>
            <ProjectList projects={user.projects}/>
        </div>
    );
}

export default User;