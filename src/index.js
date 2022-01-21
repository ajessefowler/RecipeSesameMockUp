import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // MUST load this before any other CSS files
import './components/Chatbox/Chatbox.css'
import './components/ChatTextEntry/ChatTextEntry.css';
import './components/MessageContainer/MessageContainer.css';
import './components/Logo/Logo.css';
import './components/Message/Message.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
