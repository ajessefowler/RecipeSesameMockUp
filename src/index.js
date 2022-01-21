import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // MUST load this before any other CSS files
import './components/HomeScreen/Chatbox/Chatbox.css'
import './components/HomeScreen/ChatTextEntry/ChatTextEntry.css';
import './components/HomeScreen/MessageContainer/MessageContainer.css';
import './components/HomeScreen/Logo/Logo.css';
import './components/HomeScreen/Message/Message.css';
import './components/HomeScreen/RecommendedContainer/RecommendedContainer.css';
import './components/HomeScreen/RecommendedRecipe/RecommendedRecipe.css';
import './components/HomeScreen/ShoppingCartButton/ShoppingCartButton.css';
import './components/RecipeScreen/RecipeContainer/RecipeContainer.css';
import './components/RecipeScreen/RecipeHeader/RecipeHeader.css';
import './components/RecipeScreen/RecipeDescription/RecipeDescription.css';
import './components/ShoppingCartContainer/ShoppingCartContainer.css';
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
