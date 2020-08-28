import React, { useContext } from 'react'
import ValueContext from './ValueContext';

function Child() {
    let [value, changeValue] = useContext(ValueContext);
    return (
        <div>
            I am child <br/>
            Age: {value}
            <br/>
            <button
                onClick = { () => changeValue(++value) }>
                Change Value
            </button>
        </div>
    )
}

export default Child
