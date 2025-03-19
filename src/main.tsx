import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './AuthRoute.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyBxSyc9nLG6NNW-PhNlenIbHJy5TevnePI",
  authDomain: "authentication-a9e17.firebaseapp.com",
  projectId: "authentication-a9e17",
  storageBucket: "authentication-a9e17.firebasestorage.app",
  messagingSenderId: "421137259128",
  appId: "1:421137259128:web:42dcfd4f3aa87527ebeb8d"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
