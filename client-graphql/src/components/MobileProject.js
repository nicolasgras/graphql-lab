import React from "react";

import './Mobile.css';

import MobileTaskList from "./MobileTaskList";

function MobileProject(props) {
    
    const project = props.project;

    return (
        <div className="mobile-project">
            <p>{project.name}</p>
            <MobileTaskList tasks={project.tasks}/>
        </div>
    );
}

export default MobileProject;