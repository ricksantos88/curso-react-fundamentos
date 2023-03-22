import React from 'react'
import If from './If'

const UserInfo = props => {
    const user = props.user || {}
    return (
        <div>
            <If test={ user && user.name }>
                <div>
                    Welcome <strong>{ user.name }</strong>!
                </div>
            </If>
            <If test={ !user || !!user.name }>
                <div>
                    Welcome <strong>Buddy</strong>!
                </div>
            </If>
        </div>
    )
}

export default UserInfo