import React from 'react'

const IndirectSon = props => {

    return (
        <div>
            <div>Son</div>
            <button onClick={() => props.whenClick('Wendel', 34, true)}>Send informations</button>
        </div>
    )
}

export default IndirectSon