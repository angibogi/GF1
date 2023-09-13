import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true );

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
