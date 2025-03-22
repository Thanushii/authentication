import { useState } from 'react'

function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2em',
          margin: 0,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          letterSpacing: '2px'
        }}>
          Welcome Back!
        </h1>
        <p style={{
          fontSize: '1.2em',
          marginTop: '10px',
          opacity: 0.9
        }}>
          You're currently logged in.
        </p>
      </div>
    </div>
  )
}

export default App
