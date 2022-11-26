import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './providers/AppProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          CRP <code> 脚手架</code> v0.0.1
        </p>
      </header>

      <AppProvider />
    </div>
  );
}

export default App;
