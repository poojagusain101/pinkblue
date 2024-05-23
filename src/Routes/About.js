import React from 'react'
import '../css/About.css'
import Navbar from '../navbar'
import Footer from '../Footer'

const About = () => {
  return (
    <>
     <Navbar/>
    <div className='about'>     
      <div className='body'>
      <div className="section">
        <h1>Why we are called PinkBlue?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse ut id. Excepturi sequi, architecto magnam saepe, dolorem optio rem incidunt laudantium, cumque rerum illum error necessitatibus molestias nostrum. Itaque.</p>
      </div>
      <div className="section">
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quis voluptatem ipsam perferendis fugiat! Rerum quidem autem nobis perferendis odit soluta hic unde neque! Obcaecati reprehenderit perspiciatis perferendis! Ratione, unde.</p>
      </div>
      <div className="section">
        <h1>Our Vision</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis mollitia, ea, cumque natus eligendi laboriosam optio dignissimos officia quae sit sequi sunt nisi dolores perspiciatis, a repellendus? Molestias, cupiditate.</p>
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
