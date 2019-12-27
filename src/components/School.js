import React from 'react'

function School(props) {
    return (
        <div className="container-fluid m-3">
            <h4 className="text-primary">{props.name}</h4>
            <h5>{props.major}</h5>
            <h6>{props.attend}</h6>
            <p>
                <a className="btn btn-outline-light" data-toggle="collapse" 
                href={"#" + props.short} role="button" 
                aria-expanded="false" aria-controls={props.short}>
                    Relevant Coursework</a>
            </p>
            <div className="collapse col-lg-6" id={props.short}>
                <div className="card card-body">
                    <p className="text-justify">{props.courses}</p></div>
            </div>
        </div>
    )
}

export default School;