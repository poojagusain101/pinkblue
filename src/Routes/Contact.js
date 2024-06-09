import React from 'react'
import Footer from '../Footer'
import Contactform from '../Contactform'
import "../css/contactform.css"

const Contact = () => {
  return (
    <div className='contact'>
      <img src="https://cdn.wallpapersafari.com/89/10/Cldnux.jpg" alt="" />
      <h1 className='con-h1'>Contact Us</h1>
      <Contactform/>
      <Footer/>
    </div>
  )
}

export default Contact
