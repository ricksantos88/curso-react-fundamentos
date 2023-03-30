import React from 'react';

const  StepForm = (props) => {
    return (
        <div>
            <label htmlFor="stepInput">Step: </label>
            <input 
                type="number" 
                id="stepInput" 
                value={props.step} 
                onChange={e => props.handler(+e.target.value)}
                />
        </div>
    );
}

export default StepForm;