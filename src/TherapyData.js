import React from 'react'
import './css/therapy.css'
import{
  Link,
}from 'react-router-dom';

const TherapyData = ({image,heading,text,url}) => {
  return (
    <div className='t-card'>
      <div className="t-image">
        <img src={image} alt="" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>   
      <Link to={url}>  
      <button className='btn'> 
        Explore       
        </button></Link>  
    </div>
  )
}

export default TherapyData
