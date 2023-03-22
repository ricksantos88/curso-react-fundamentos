import React, { useState } from 'react'
import IndirectSon from './IndirectSon'

const IndirectFather = props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    const sendInformation = (nameP, ageP, nerdP) => {
        console.log(nameP, ageP, nerdP);
        setName(nameP)
        setAge(ageP)
        setNerd(nerdP)
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