import React from 'react'
import Hero from '../Hero'
import Navbar from '../navbar'
import Popular from '../popular'
import Therapy from '../Therapy'
import Testimonials from '../Testimonials'
import Getstarted from '../Getstarted'
import Footer from '../Footer'
import "../css/hero.css"


const Home = () => {
  return (
    <div>
        <Navbar/>
      <Hero/>

      <Therapy/>
      <Popular/>
      <Testimonials/>
      <Getstarted/>
      <Footer/>
    </div>
  )
}

export default Home
