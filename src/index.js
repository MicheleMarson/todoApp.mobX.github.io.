import ReactDOM from 'react-dom/client'
import React from 'react';
import "./styles/style.css"
import "./styles/style2.css"
import Todo from './Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);