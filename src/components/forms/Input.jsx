import React, { useState } from 'react'
import './input.css'

const Input = props => {

    const [value, setValue] = useState('initial')

    const whenChange = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className='Input'>
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="text" value={value} onChange={whenChange} />
                <input type="text" value={value} readOnly/>
                <input type="text" value={undefined} />
            </div>
        </div>
    )
}

export default Input