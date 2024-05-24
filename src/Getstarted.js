import React from 'react'
import { Link } from 'react-router-dom'
import './css/getstarted.css'

const Getstarted = ({isAuth}) => {
  return (
    <>
    <div className='getstarted'>
        <div className="ctn-container">
            <div className="ctn-text">
                <h1>Get Connected with PinkBlue</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius.</p>
            </div>
            {!isAuth ? 
            <Link to="/login"><button className='ctn-btn'>Get Started</button></Link>
        : <Link to="/contact"><button className='ctn-btn'><b>Get Started</b></button></Link>}
        </div>          
    </div>
    </>
  )
}

export default Getstarted
