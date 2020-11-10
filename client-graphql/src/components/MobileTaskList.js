import React from "react";
import MobileTask from "./MobileTask";

function MobileTaskList(props) {
    
    return (
        <div>
            {props.tasks.map(t => <MobileTask key={t.description} task={t} />)}            
        </div>
    );
}

export default MobileTaskList;