import React from 'react'
import './css/popular.css'
// import BlogData from './BlogData'

const Posts1=[
  {
    id:1,
    postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOc9k2ZbUgjRkXQ1o0tOdkSwu6Em0TpdsJA&s",
    title:'FINDING BALANCE IN THE AGE OF FOMO: STRATEGIES FOR PRIORITIZING WHAT MATTERS MOST TO YOU',
    desc:"In today's fast-paced world, the fear of missing out, or FOMO, has become a common phenomenon. With the constant bombardment of social media updates, news alerts, and endless opportunities"
  },
  {
    id:2,
    postImg: "https://static.vecteezy.com/system/resources/thumbnails/022/207/510/small_2x/unhappy-boy-sitting-with-hands-on-knees-vector.jpg",
    title:' SOCIAL ISOLATION OF REMOTE WORKING: HOW TO STAY CONNECTED WITH YOUR TEAM',
    desc:"In today's digital age, remote work has become increasingly common, offering flexibility and convenience for professionals. But, with all the benefits also lies a darker side: Social Isolation."
  } 
]

const Posts2=[
  {
    id:1,
    postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GuinOypYyVMaTzVs5qusl22sUkufupa6Bg&s",
    title:'SLEEPLESS NIGHTS AND MENTAL HEALTH: NAVIGATING THE IMPACT AND CARE STRATEGIES',
    desc:"The word 'sleep' can be traced back to the Germanic word “sleep” - which meant 'to be or become unconscious.' In Old English, the word referred to the state of natural rest observed in humans and animals."
  },
  {
    id:2,
    postImg: "https://media.istockphoto.com/id/1340294219/vector/a-sad-young-man-has-a-clouded-mind-on-blue-background-a-depressed-teenager-boy-suffers-from.jpg?s=612x612&w=0&k=20&c=jPsow4eeNQeyf512Lb07NM_ELIgELLqCm8zbl6FznOQ=",
    title:'THE ARRIVAL FALLACY: WILL YOU TRULY BE HAPPY AFTER ACHIEVING YOUR GOALS?',
    desc:"Have you ever found yourselves eagerly chasing after a goal, convinced that once you achieve it, you'll finally be happy? Goals could be getting a promotion, purchasing a dream home, reaching"
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
