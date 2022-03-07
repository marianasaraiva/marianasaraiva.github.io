import React from 'react';
import '../src/App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Provider from './context/Provider.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
