import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import AppRouter from './router/AppRouter'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/indexStyles.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <App /> */}
    <AppRouter/>
  </React.StrictMode>,
)
