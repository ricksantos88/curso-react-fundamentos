import React from 'react'
import DirectSon from './DirectSon'

const DirectFather = props => {
    return (
        <div>
            <DirectSon text="Son one!" number={42} bool={true}/>
            <DirectSon text="Son two!" number={41} bool={false}/>
        </div>
    )
}

export default DirectFather