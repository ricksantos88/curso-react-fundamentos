import React from 'react'
import IndirectSon from './IndirectSon'

const IndirectFather = props => {

    let name = '?'
    let age = 0
    let nerd = false

    const sendInformation = (nameP, ageP, nerdP) => {
        console.log(nameP, ageP, nerdP);

    }

    return (
        <div>
            <div>Father</div>
            <div>{name}</div>
            <div>{age}</div>
            <div>Nerd: { nerd ? 'true' : 'false' }</div>
            <IndirectSon whenClick={sendInformation}/>
        </div>
    )
}

export default IndirectFather