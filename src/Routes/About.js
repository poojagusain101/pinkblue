import React from 'react'
import '../css/About.css'
import Footer from '../Footer'

const About = () => {
  return (
    <>
    <div className='about'>     
      <div className='body'>
      <div className="section">
        <h1>Why we are called PinkBlue?</h1>
        <p>Because we believe in the transformative power of colors. Pink represents compassion, understanding, and self-care, while blue signifies the struggles of anxiety and mental health challenges. Together, we're on a journey to blend these colors into a palette of healing and empowerment.
        PinkBlue isn't just a name; it's a philosophy. It symbolizes our belief in creating a brighter, more vibrant world of mental wellness.
</p>
      </div>
      <div className="section">
        <h1>Our Mission</h1>
        <p>Our project is driven by a singular mission: to revolutionize mental health care accessibility and support. Through innovative technology and a compassionate approach, we aim to break down barriers to mental wellness, ensuring that everyone, regardless of background or circumstance, has access to the resources they need to thrive. Our platform fosters a sense of community and understanding, providing personalized support and guidance every step of the way. Together, we're reshaping the conversation around mental health, empowering individuals to prioritize their well-being and live their fullest lives.</p>
      </div>
      <div className="section">
        <h1>Our Vision</h1>
        <p>In our vision for this project, we see a world where mental health is not just a priority but a fundamental aspect of overall well-being. We imagine a future where individuals feel empowered to seek support without fear of judgment or stigma, where communities come together to provide compassion and understanding. Through our platform, we aim to bridge the gap between individuals and mental health resources, creating a space where everyone feels heard, valued, and supported. Together, we envision a future where mental health is destigmatized, where access to care is equitable, and where every person can live their life to the fullest.</p>
      </div>
    </div>
    <div>
        <img src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className='about-img' alt="" />
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default About
