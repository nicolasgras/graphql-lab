import React from "react";

import "./Mobile.css";

function MobileTask(props) {
    
    const task = props.task;

    return (
        <div className="mobile-task">
            <p>{task.description}</p>
        </div>
    );
}

export default MobileTask;