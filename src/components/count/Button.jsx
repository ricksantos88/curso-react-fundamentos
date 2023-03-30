import React from 'react';

const  Button = (props) => {
    return (
        <button onClick={props.handler}><h2>{props.label}</h2></button>
    );
}

export default Button;