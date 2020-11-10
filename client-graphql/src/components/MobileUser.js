import React from "react";

import './Mobile.css';
import MobileProjectList from "./MobileProjectList";

function MobileUser(props) {
    
    let user = props.user;

    return (
        <div className="mobile-user">
            <span>{user.email} [id={user.id}]</span>
            <MobileProjectList projects={user.projects}/>
        </div>
    );
}

export default MobileUser;