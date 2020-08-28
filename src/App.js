import React from 'react';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value = 95
  return (
    <ValueContext.Provider value={value}>
      <div>
        <Parent/>
        <br/>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
