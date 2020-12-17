import React from 'react';
import './Example.css';
import logo from './logo.svg';

function Example({...props}) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={ props.color && { color: props.color } }>{props.label}</div>
      </a>
    </header>
  );
}

export default Example;
