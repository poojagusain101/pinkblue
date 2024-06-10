import React from 'react'
import './css/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div>
                <h1 className='ok'>PinkBlue</h1>
                <p>Making Blues Pink</p>
            </div>
            <div>
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-whatsapp-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>

        </div>
        <div className="bottom">
            <div>
                {/* <h4>Project</h4> */}
                <a href="/">Location</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All versions</a>
            </div>

            <div>
                {/* <h4>Project</h4> */}
                <a href="/Contact">Contact Us</a>
                <a href="/About">About Us</a>
                <a href="/">Disclaimer</a>
                <a href="/">Privacy Policy</a>
            </div>

            <div>
                {/* <h4>Project</h4> */}
                <a href="/">Terms of Service</a>
                <a href="/">Status</a>
                <a href="/">Project</a>
                <a href="/">Resources</a>
            </div>

            {/* <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All versions</a>
            </div> */}
        </div>
        <div className='warning'>
            <p>Your well-being is our priority.
                </p>
            <p>If you are in a life-threatening situation, please do not hesitate to seek help. This platform is not equipped to handle emergencies.</p>
            <p>All Rights Reserved. @PinkBlue</p>
        </div>
      
    </div>
  )
}

export default Footer
