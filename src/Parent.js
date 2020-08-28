import React from 'react'
import Child from './Child'

function Parent({age}) {
    return (
        <div>
            I am Parent
            <Child age={age} />
        </div>
    )
}

export default Parent
