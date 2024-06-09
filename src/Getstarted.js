import React from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import './css/getstarted.css'
import { auth } from './firebase';

const Getstarted = ({isAuth}) => {

  // const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      const user = auth.currentUser;
      if (user) {
        const templateParams = {
          to_email: user.email, // or user.uid if you prefer
        };

      emailjs
        .send('service_s2ho5t4', 'template_afv7l5s', templateParams, {
          publicKey: 'RbZtuzrruGjGUYLVg',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  }
    };

  return (
    <>
    <div className='getstarted'>
        <div className="ctn-container">
            <div className="ctn-text">
                <h1 className='headin'>Get Connected with PinkBlue</h1>
                <p>Your mental health matters to us. Connect with our team for personalized support and guidance on your wellness journey.</p>
            </div>
            {!isAuth ? 
            <Link to="/login"><button className='ctn-btn'>Get Started</button></Link>
        : <button className='ctn-btn' onClick={sendEmail}><b>Get Started</b></button>}
        </div>          
    </div>
    </>
  )
}

export default Getstarted
