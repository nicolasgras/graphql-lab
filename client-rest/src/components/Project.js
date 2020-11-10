import React from "react";

import './Project.css';

import axios from "axios";

import config from '../config';

import TaskList from "./TaskList";


class Project extends React.Component {

    state = {
        project: {},
        tasks: []
    };

    async componentDidMount() {
        
        let tasks = [];

        await axios.get(config.graphql.server.host + "/api/projects/" + this.props.project.id +"/tasks")
        .then(response => tasks = response.data)
        .catch(e => console.log(e));

        const newState = Object.assign({}, this.state, {
            project: this.props.project,
            tasks: tasks
        });

        // store the new state object in the component's state
        this.setState(newState);
    }

    render() {
     
        let project = this.props.project;

        return (
            <div className="project">
                <p>{project.name} [id={project.id}]</p>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}


export default Project;