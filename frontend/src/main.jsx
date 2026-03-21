import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/style.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="330941327355-q6mg13vi331g6kffc33f42ds4avca908.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
  </StrictMode>
)