import React from 'react'

const SingleProject = (props) => {
    return (
        <div>
            <p>{props.match.params.id}</p>
        </div>
    )
}

export default SingleProject;