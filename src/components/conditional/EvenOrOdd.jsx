import React, { useState } from 'react';

const EvenOrOdd = props => {

    const isEven = props.number % 2 === 0

    return (
        <div>
            <p>{ isEven ? <span>Even</span> : <span>Odd</span> }</p>
        </div>
    )
}

export default EvenOrOdd