import React from "react";

import './Project.css';

import TaskList from "./TaskList";

function Project(props) {
    
    const project = props.project;

    return (
        <div className="project">
            <p>{project.name} [id={project.id}]</p>
            <TaskList tasks={project.tasks}/>
        </div>
    );
}

export default Project;