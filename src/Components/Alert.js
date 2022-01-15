import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height: "52px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.type}: <strong>{props.alert.msg}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        </div>
    )
}
