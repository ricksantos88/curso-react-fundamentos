import React from 'react';

export default props => {
    return (
        <span>
            {props.name} <strong>{props.surname}</strong>
        </span>
    )
}