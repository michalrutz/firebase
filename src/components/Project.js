import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Project = ({props}) => {
    const {titel, description} = props;
    return(
        <div>
            <Link to={`/project/${props.titel}`}><button>{titel}</button></Link>
        </div>
    )
}

const mapStateToPorps = (state) => ({
    projects: state.projects
})

export default connect (mapStateToPorps)(Project);