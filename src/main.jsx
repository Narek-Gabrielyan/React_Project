// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// JSX
import App from './App.jsx'
import { products } from './Relative_DataBase/All_Database.js'
// CSS
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App products={ products } />
  </BrowserRouter>
);
