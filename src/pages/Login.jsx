import './Login.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import LoginBox from '../components/Login-box.jsx'
export default function Login() {
  return (
    <>
    <div className="Hero-content">
      <Header />
      <div className="login-container">
        <LoginBox />
      </div>
      
    </div>
    
    <Footer />
    </>
  )
}