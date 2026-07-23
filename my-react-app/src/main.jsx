import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Api from './Api.jsx'
import DB_connect from './DB_connect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DB_connect/>
    {/* <App />
    <Api /> */}
  </StrictMode>

)