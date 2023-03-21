import React, { useState } from 'react';

const Aleatory = (props) => {
    
    const { min, max } = props
    const [aleatoryNumber, setAleatoryNumber] = useState(parseInt(Math.random() * (max - min)) + min)

    return(
        <div>
            <button onClick={() => setAleatoryNumber(parseInt(Math.random() * (max - min)) + min)}>Aleatory number between 0 and 100</button>
            <p>Minimun: {min}</p>
            <p>Maximal: {max}</p>
            <p>Aleatory: {aleatoryNumber}</p>
        </div>
    )
}

export default Aleatory