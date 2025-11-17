import React from 'react';
import './Login-box.css';
import GoogleIcon from './svg/google.jsx';
import FacebookIcon from './svg/facebook.jsx';

export default function LoginBox() {
  const [isLogin, setIsLogin] = React.useState(true);

  // Separate states for login
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  // Separate states for signup
  const [signupUsername, setSignupUsername] = React.useState("");
  const [signupEmail, setSignupEmail] = React.useState("");
  const [signupPassword, setSignupPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // 🔑 LOGIN
      const res = await fetch("http://localhost:3000/login", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({ email: loginEmail, password: loginPassword })
      });
      const data = await res.json();

      if (res.ok) {
        const token = res.headers.get("Authorization"); 
        if (token) {
          localStorage.setItem("token", token);
        }
        alert(data.message);
        window.location.href = "/packages";
      } else {
        alert(data.message);
      }

      setLoginEmail("");
      setLoginPassword("");

    } else {
      // 📝 SIGNUP
      const res = await fetch("http://localhost:3000/signup", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({ username: signupUsername, email: signupEmail, password: signupPassword })
      });
      const data = await res.json();

      if (data.success) {
        alert(data.message);
        window.location.href = "/packages";
      } else {
        alert(data.message);
      }
    }

    setSignupUsername("");
    setSignupEmail("");
    setSignupPassword("");
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <h4>Start Your Journey Today</h4>
        <h6>Discover amazing destinations worldwide</h6>
      </div>

      <div className="Toggle">
        <button 
          className={`login-btn ${isLogin ? 'active' : ''}`} 
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button 
          className={`signup-btn ${!isLogin ? 'active' : ''}`} 
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div> 

      <div className="login-form">
        {isLogin ? (
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              value={loginEmail} 
              placeholder="Email address" 
              required 
              onChange={(e) => setLoginEmail(e.target.value)} 
            />
            <input 
              type="password" 
              value={loginPassword} 
              placeholder="Password" 
              required 
              onChange={(e) => setLoginPassword(e.target.value)} 
            />
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={signupUsername} 
              placeholder="Name" 
              required 
              onChange={(e) => setSignupUsername(e.target.value)} 
            />
            <input 
              type="email"  
              value={signupEmail} 
              placeholder="Email" 
              required 
              onChange={(e) => setSignupEmail(e.target.value)} 
            />
            <input 
              type="password" 
              value={signupPassword} 
              placeholder="Password" 
              required 
              onChange={(e) => setSignupPassword(e.target.value)} 
            />
            <button type="submit">Sign up</button>
          </form>  
        )}
      </div>

      <div className="Other-methods">
        <button className="google-btn">
          <GoogleIcon />
        </button>
        <button className="facebook-btn">
          <FacebookIcon />
        </button>  
      </div>    
    </div>
  );
}
