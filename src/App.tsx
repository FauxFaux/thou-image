import React from 'react';

function App() {
  console.log(process.env);
  return (
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
      <image href="https://quad.pe/e/RLBcc1rbzl.jpg" height="500" width="500"/>
      <text id="label" x="20" y="85">{process.env.REACT_APP_TEXT}</text>
    </svg>
  );
}

export default App;
