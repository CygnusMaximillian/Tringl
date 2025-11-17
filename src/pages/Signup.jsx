import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import './Signup.css'

export default function Signup() {
  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-form">
          <h2>Create Your Account</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
