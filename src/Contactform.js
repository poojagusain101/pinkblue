import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './css/contactform.css'

const Contactform = () => {
  const form = useRef();

  const initialState = {
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s2ho5t4', 'template_ii79enz', form.current, {
        publicKey: 'RbZtuzrruGjGUYLVg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!'); 
          setFormData(initialState);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  return (
    <div className='form-container'>
    <h1>Send a msg to us!</h1>
    <form ref={form} onSubmit={sendEmail}>
      <input name="user_name" placeholder='Name' type="text" value={formData.user_name} onChange={handleChange} required/>
      <input name="user_email" placeholder='Email' type="Email" value={formData.user_email} onChange={handleChange} required/>
      <input name="subject" placeholder='Subject' type="text" value={formData.subject} onChange={handleChange} required />
      <textarea name="message" cols="30" rows="4" placeholder='Message' value={formData.message} onChange={handleChange} required/>
      <button type="submit" value="Send">Send Message</button>
    </form>

  </div>
  )
}

export default Contactform
