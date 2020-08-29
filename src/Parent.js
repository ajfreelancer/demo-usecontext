import React from 'react'
import Child from './Child'
import Child1 from './Child1'

function Parent() {
    return (
        <div>
            I am Parent
            <Child/>
            <Child1/>
        </div>
    )
}

export default Parent
