import React from 'react'

const DirectSon = props => {
    return (
        <div>
            <div>
                <span>{props.text} </span>
                <span><strong>{props.number} </strong> </span>
                <span>{props.bool ? 'True' : 'False'}</span>
            </div>
        </div>
    )
}

export default DirectSon