import React from 'react'
import "../css/service.css"
import Navbar from '../navbar'
import Counselors from '../Counselors'
import Footer from '../Footer'

const Service = () => {
  return (
    <>
    <Navbar/>
    <div className='service'>
      <h1 className='service-h1'>Our Pricing Plans</h1>
      <div className="grid-wrapper-service">
        <div className="plan">
            <h3>Basic</h3>
            <h1>Rs 1000/Monthly</h1>
          <ul>
            <li><i class="fa-solid fa-check"></i>  talk sessions</li>
            <li><i class="fa-solid fa-check"></i> fun games</li>
            <li><i class="fa-solid fa-check"></i> outings</li>
            <li><i class="fa-solid fa-check"></i> routine checkups</li>
          </ul>
          <button className='service-btn'>Check Out</button>
        </div>

        <div className="plan">
            <h3>Standard</h3>
            <h1>Rs 4000/Monthly</h1>
          <ul>
            <li><i class="fa-solid fa-check"></i> talk sessions</li>
            <li><i class="fa-solid fa-check"></i> fun games</li>
            <li><i class="fa-solid fa-check"></i> outings</li>
            <li><i class="fa-solid fa-check"></i> routine checkups</li>
          </ul>
          <button className='service-btn'>Check Out</button>
        </div>

        <div className="plan">
            <h3>Premium</h3>
            <h1>Rs 8000/Monthly</h1>
          <ul>
            <li><i class="fa-solid fa-check"></i> talk sessions</li>
            <li><i class="fa-solid fa-check"></i> fun games</li>
            <li><i class="fa-solid fa-check"></i> outings</li>
            <li><i class="fa-solid fa-check"></i> routine checkups</li>
          </ul>
          <button className='service-btn'>Check Out</button>
        </div>

      </div>
      </div>
      
      
      <Counselors/>
      <Footer/>
      </>

  )
}

export default Service
