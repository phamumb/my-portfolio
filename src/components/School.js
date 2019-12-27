import React from 'react'

function School(props) {
    return (
        <div className="container-fluid m-3">
            <h4 className="text-primary">{props.name}</h4>
            <h5>{props.major}</h5>
            <h6>{props.attend}</h6>
            <p>
                <a class="btn btn-outline-light" data-toggle="collapse" 
                href={"#" + props.short} role="button" 
                aria-expanded="false" aria-controls={props.short}>
                    Relevant Coursework</a>
            </p>
            <div class="collapse" id={props.short}>
                <div class="card card-body">
                    <span>{props.courses}</span></div>
            </div>
        </div>
    )
}

export default School;