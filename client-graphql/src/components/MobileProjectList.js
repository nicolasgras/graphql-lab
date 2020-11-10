import React from "react";
import MobileProject from "./MobileProject";

function MobileProjectList(props) {
    
    return (
        <div>
            {props.projects.map(p => <MobileProject key={p.name} project={p} />)}            
        </div>
    );
}

export default MobileProjectList;