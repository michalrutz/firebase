import React from 'react'
import { connect } from "react-redux";
import Project from './Project';

const ProjectsList = (props) => {
    return(
        <div>
            {props.projects && props.projects.map((project) => (
                <Project key={project.id} props={project}/>) )}
        </div>
    )
}

const mapStateToPorps = (state) => ({
    projects: state.projects
})

export default connect (mapStateToPorps)(ProjectsList);