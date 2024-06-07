import React from 'react'
import './css/testimonials.css'
const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h1>What our Users say</h1>
      <p>
      Hear directly from our users as they share their personal journeys and the impact our tools and resources has had on their mental health and well-being.
      </p>
      <div className="grid-wrapper2">
        <div className="review">
        <i class="fa-solid fa-quote-right"></i>
        <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3qBEVJVulLAI3P2O0blx4CSUjzhwxJN_tQ&s" alt="" />
            <h1>Aarti Sinha</h1>
        </div>
        <p>Using this app has been a game-changer for my mental health. The resources and support available have helped me navigate tough times with greater ease and resilience. I can't recommend it enough!</p>
        </div>

        <div className="review">
        <i class="fa-solid fa-quote-right"></i>
        <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FBQLR2bgffyuceXXqdOtWHIANdQbFt4mA&s" alt="" />
            <h1>Lata Jain</h1>
        </div>
        <p>This app has been a beacon of hope for me. The personalized guidance and activities have truly made a difference in my daily life. It's a must-have for anyone looking to improve their mental well-being.</p>
        </div>

        <div className="review">
        <i class="fa-solid fa-quote-right"></i>
        <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLANSwDpTVG7zsnaVQjXEeaYnsqpR5pg4erw&s" alt="" />
            <h1>Jay Gupta</h1>
        </div>
        <p>What I love most about this app is its holistic approach to mental wellness. The integration of different resources like yoga, music, and professional therapy has made it an all-in-one solution for my mental health needs.</p>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
