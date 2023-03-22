import React from 'react'

const IndirectSon = props => {

    const min = 30
    const max = 70

    const generatAge = () => parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <div>Son</div>
            <button onClick={() => props.whenClick('Wendel', generatAge(), true)}>Send informations</button>
        </div>
    )
}

export default IndirectSon