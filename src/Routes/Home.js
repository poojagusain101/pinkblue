import React from 'react'
import Hero from '../Hero'
// import Navbar from '../navbar'
import Popular from '../popular'
import Therapy from '../Therapy'
import Testimonials from '../Testimonials'
import Getstarted from '../Getstarted'
import Footer from '../Footer'
import "../css/hero.css"


const Home = ({isAuth}) => {
  return (
    <div>
      <Hero/>
      <Therapy/>
      <Popular/>
      <Testimonials/>
      <Getstarted isAuth={isAuth}/>
      <Footer/>
    </div>
  )
}

export default Home
