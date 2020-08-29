import React, { useReducer } from 'react'
import numberReducer from './numberReducer';

function Child1() {
    
    const [state, changeState] = useReducer(numberReducer, 52)

    return (
        <div>
            Child1 state = {state}
            <button
                onClick = { () => changeState( {type: "INCREMENT", val: 10} )}>
                Increment
            </button>
            <button
                onClick = { () => changeState( {type: "DECREMENT", val: 5} )}>
                Decrement
            </button>
        </div>
    )
}

export default Child1
