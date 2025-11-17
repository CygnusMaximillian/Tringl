import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Frame from './pages/frame'
import Signup from './pages/Login'
import Packeges from './pages/packeges'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frame />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/framepage" element={<Frame />} />
          <Route path="/packages" element={<Packeges />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
