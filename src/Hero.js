import React from 'react'
import "./css/hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div className="hero">
            <img src="https://e0.pxfuel.com/wallpapers/970/388/desktop-wallpaper-21-background-calm-anime-anime-peace.jpg" alt="heroImg" />
        </div>
      <div className="hero-text">
        <h1>Place With No Blues</h1>
        <p>Together we can make the blues pink.</p>
       <Link to="/blogs"><button className='show'>Blogs</button></Link> 
      </div>
    </>
  )
}

export default Hero
