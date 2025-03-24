import { useState } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function App() {
  const auth = getAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

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
        <button 
          onClick={handleLogout}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#ff2222'}
          onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#ff4444'}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default App
