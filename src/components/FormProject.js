import React from 'react';
import { connect } from "react-redux";
import { addProjectDB, addProject } from '../store/actions/projectActions';

const FormProject = (props) => {

    const submitProject = (e) => {
        e.preventDefault();
        console.log("FB->", props.firebase.data )
        let titel = e.target.children.titel.value;
        let description = e.target.children.description.value
        props.dispatch( addProjectDB ( {titel, description} ));   
    };

    return(
        <div>
            <form onSubmit={submitProject}>
                <input type="text" id="titel"></input>
                <input type="text" id="description"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    projects: state.projects,
    firebase: state.firebase
})

export default connect(mapStateToProps)(FormProject);