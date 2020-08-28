import React, { useState } from 'react';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  const value = useState(24) 
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
