import React from 'react'

import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {LoginPage} from './pages/LoginPage.jsx'
import {SignupPage} from './pages/SignupPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/" element={<App />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
    
  </React.StrictMode>,
)
