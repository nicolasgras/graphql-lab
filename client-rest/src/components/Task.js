import React from "react";

function Task(props) {
    
    const task = props.task;

    return (
        <div className="task">
            <p>{task.description} [id={task.id}]</p>
        </div>
    );
}

export default Task;