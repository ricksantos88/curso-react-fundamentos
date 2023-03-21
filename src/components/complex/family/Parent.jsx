import React from 'react';
import Chield from'./child'


const Parent = props => {
    console.log(props)
    return (
        <div>
            Mother: <strong>{`${props.name} ${props.surname}`}</strong>
            <hr></hr>
            Children: <br />
            <Chield name="Wendel" surname={props.surname} /> <br />
            <Chield name="Marcela" surname={props.surname} /> <br />
            <Chield name="Marcelo" surname={props.surname} />
            
        </div>
    )
}

export default Parent