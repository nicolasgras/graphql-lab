import React from "react";
import Task from "./Task";

function TaskList(props) {
    
    return (
        <div>
            {props.tasks.map(t => <Task key={t.id} task={t} />)}            
        </div>
    );
}

export default TaskList;