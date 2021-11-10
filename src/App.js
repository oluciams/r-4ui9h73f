import React, { useState } from 'react';

import './App.css';

function App (){

  const [repeater, setRepeater] = useState();

  const handleRepeater= (e)=>{
   e.target.value  
   setRepeater(e.target.value)
  
  }  
  
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" value={repeater} onChange={handleRepeater} placeholder="Empieza a escribir algo" />
        <p className="repeater">{repeater}</p>
      </div>
    );
  
}

export default App;
