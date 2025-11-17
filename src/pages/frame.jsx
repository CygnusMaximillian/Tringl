import Header from '../components/header'
import Footer from '../components/footer'
import Sec2 from '../components/framecomp/sec2'
import Sec3 from '../components/framecomp/sec3'
import Sec4 from '../components/framecomp/sec4'
import Sec5 from '../components/framecomp/sec5'
import './frame.css'

export default function Frame() {
  return (
    <>
    <div className="frame-content" style={{ backgroundImage: "url('../components/frameimg.png')" }}>
      <div className="frameimg">
        <Header/>
        <div className="sec1">
          <div className="text-container">
            <h1>Discover Your Perfect Adventure</h1>
            <h5>Compare thousands of travel packages from trusted providers</h5>
            <div className="form-container">
            <form>
              <div className="input-group">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s7-4.686 7-11a7 7 0 10-14 0c0 6.314 7 11 7 11z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="2.5" stroke="#9CA3AF" strokeWidth="1.5" />
                </svg>
                <input type="text" name="destination" placeholder="Destination" />
              </div>
              <div className="input-group">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3.5" y="4.5" width="17" height="16" rx="2" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M8 2.75V6M16 2.75V6M3.5 9.5h17" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input type="date" name="duration" placeholder="Duration" />
              </div>
              <div className="input-group">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v18M16 7.5c0-1.657-1.79-3-4-3s-4 1.343-4 3 1.79 3 4 3 4 1.343 4 3-1.79 3-4 3-4-1.343-4-3" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="number" name="budget" placeholder="Budget" min="0" />
              </div>
              <button type="button">Find your perfect place</button>
            </form>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    <Sec2 />
    <Sec3 />
    <Sec4 />
    <Sec5 />
    <Footer/>
    </>
  )
}