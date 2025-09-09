// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import { createRoot } from 'react-dom/client'

import ReactDOM from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById('react_app')).render(
  <StrictMode>
    <App />
 </StrictMode>,
)


// const root = ReactDOM.createRoot(document.getElementById("react_app"));

// root.render(<App />);