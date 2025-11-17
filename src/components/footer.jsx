import CallIcon from './svg/call.jsx';
import FacebookIcon from './svg/facebook.jsx';  
import InstaIcon from './svg/insta.jsx';
import TwitterIcon from './svg/twitter.jsx';
import MailIcon from './svg/mail.jsx'; 
import './footer.css'; 
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="travel-ease">
          <ul>
            <h4>TravelEase</h4>
            <li>Making your travel dreams come true with exceptional stays worldwide.</li>
          </ul>
        </div>
        <div className="Quick-Links">
          <ul>
            <h4>Quick Links</h4>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/FAQs">FAQs</a></li>
          </ul>
        </div>
        <div className="Contact-us">
          <ul>
            <h4>Contact Us</h4>
            <li>
              <MailIcon />
              <a href="mailto:info@travease.com">info@travease.com</a>
            </li>
            <li>
              <CallIcon />
              <a href="tel:+1234567890">+1 234 567 890</a>
            </li>
          </ul>
        </div>
        <div className="follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstaIcon />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>  
      <small className="Copyright">© 2025 TravelEase. All rights reserved.</small>
    </footer>
  )
}