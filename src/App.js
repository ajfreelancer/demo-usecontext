import React, {useState} from 'react';
import Parent from './Parent';

function App() {
  let [age, setAge] = useState(25);
  return (
    <div>
      <Parent age={age} />
      <br/>
      <button onClick={ () => setAge(++age) }>Increase Age</button>
    </div>
  );
}

export default App;
