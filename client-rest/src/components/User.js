import React from "react";
import axios from "axios";

import config from '../config';

import './User.css';
import ProjectList from "./ProjectList";

class User extends React.Component {

    state = {
        user: {},
        projects: []
    };

    async componentDidMount() {

        let projects = [];

        await axios.get(config.graphql.server.host + "/api/users/" + this.props.user.id +"/projects")
        .then(response => projects = response.data)
        .catch(e => console.log(e));

        const newState = Object.assign({}, this.state, {
            user: this.props.user,
            projects: projects
        });

        // store the new state object in the component's state
        this.setState(newState);
    }

    render() {

        return (
            <div className="user">
                <span>{this.state.user.firstname} {this.state.user.lastname} ({this.state.user.email}) [id={this.state.user.id}]</span> 
                <ProjectList projects={this.state.projects}/>
            </div>
        );

    }
}

export default User;