import React, { useContext } from 'react'
import ValueContext from './ValueContext';

function Child() {
    const value = useContext(ValueContext);
    return (
        <div>
            I am child <br/>
            Age: {value}
        </div>
    )
}

export default Child
