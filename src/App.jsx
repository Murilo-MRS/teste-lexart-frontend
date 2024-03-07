import React from 'react';
import Routes from './Routes/Routes';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
