import React from 'react'
import './css/popular.css'
// import BlogData from './BlogData'

const Posts1=[
  {
    id:1,
    postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGcDBqtRXyzzUErv9ufshDCgl4_ulNaz4jg&usqp=CAU",
    title:' happiness is the key',
    desc:'mind, in the Western tradition, the complex of faculties involved in perceiving, remembering, considering, evaluating, and deciding.'
  },
  {
    id:2,
    postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGcDBqtRXyzzUErv9ufshDCgl4_ulNaz4jg&usqp=CAU",
    title:' happiness is the key',
    desc:'mind, in the Western tradition, the complex of faculties involved in perceiving, remembering, considering, evaluating, and deciding.'
  } 
]

const Posts2=[
  {
    id:1,
    postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGcDBqtRXyzzUErv9ufshDCgl4_ulNaz4jg&usqp=CAU",
    title:' happiness is the key',
    desc:'mind, in the Western tradition, the complex of faculties involved in perceiving, remembering, considering, evaluating, and deciding.'
  },
  {
    id:2,
    postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGcDBqtRXyzzUErv9ufshDCgl4_ulNaz4jg&usqp=CAU",
    title:' happiness is the key',
    desc:'mind, in the Western tradition, the complex of faculties involved in perceiving, remembering, considering, evaluating, and deciding.'
  } 
]

const Popular = () => {
  return (
    <div className='popular'>
       <div className="container">
        <div className="Intro">
          <h2 className='title'>
            Our Popular Blogs!!!
          </h2>
          <p>here are some of our refreshing blogs...</p>
        </div>       

      <div className="container grid">
        {
          Posts1.map(({id, postImg,title,desc})=>{
            return (
              <div className="singlepost grid">
          <div className="imgDiv">
           <img src={postImg} alt={title} /> 
          </div>

          <div className="postDetails">
            <h3>{title}</h3>
            <p>{desc}</p>
          <a href="/" className='flex'>
          Read More
          <i class="fa-solid fa-circle-arrow-right"></i>
          </a>
          </div>
          </div>
            )
          })
        } 

        </div>

        <div className="container grid">
        {
          Posts2.map(({id, postImg,title,desc})=>{
            return (
              <div className="singlepost grid">
          <div className="imgDiv">
           <img src={postImg} alt={title} /> 
          </div>

          <div className="postDetails">
            <h3>{title}</h3>
            <p>{desc}</p>


          <a href="/" className='flex'>
          Read More
          <i class="fa-solid fa-circle-arrow-right"></i>

          </a>
          </div>
          </div>
            )
          })
        } 

        </div>
      </div>
    </div>
  )
}

export default Popular
