import React from 'react'
import './css/counselor.css'

const Counselors = () => {
  return (
<div className='counselors'>
        <h1 className='counselors-h1'> Our Counselors</h1>
      <p>
      Connect with our licensed therapists to receive personalized support and guidance. Our experts are here to help you navigate through life's challenges, offering strategies to manage stress, anxiety, and other mental health concerns. 
      </p>
      <div className="grid-wrapper-coun">
        <div className="member">
        <div className="profile">
            <img src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.webp?b=1&s=170667a&w=0&k=20&c=kQ-sWPkU5XP8sG1-MIrGnTe9SkLQBjGvVsa2X8uVHfc=" alt="" />
            <h1>Vinod Kumar</h1>
        </div>
       <ul>
        <li>Specialization
            <p>Stress, Anxiety, Depression, Relationship Issues, Couple Counseling </p>
        </li>
        <li>Next available at
            <p>Oct 23, 2024 10:00 AM</p>
        </li>
       </ul>
       <button className='counselor-btn'>Book Session</button>
        </div>

        <div className="member">
        <div className="profile">
            <img src="data:image/jpeg;base64,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" alt="" />
            <h1>Sarah Saini</h1>
        </div>
       <ul>
        <li>Specialization
            <p>Stress, Anxiety, Depression, Relationship Issues, Couple Counseling </p>
        </li>
        <li>Next available at
            <p>Oct 23, 2024 10:00 AM</p>
        </li>
       </ul>
       <button className='counselor-btn'>Book Session</button>
        </div>


        <div className="member">
        <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBj5I9JzURL5mef7aJiYajOGmbmEG_8jF60g&s" alt="" />
            <h1>Karan Singh</h1>
        </div>
       <ul>
        <li>Specialization
            <p>Stress, Anxiety, Depression, Relationship Issues, Couple Counseling </p>
        </li>
        <li>Next available at
            <p>Oct 23, 2024 10:00 AM</p>
        </li>
       </ul>
       <button className='counselor-btn'>Book Session</button>
        </div>

       

      </div>

      <div className="grid-wrapper-coun">
        <div className="member">
        <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yiehcI7J0wezhuTF51sfE-LkGqlWIvLUZg&s" alt="" />
            <h1>Riya Negi</h1>
        </div>
       <ul>
        <li>Specialization
            <p>Stress, Anxiety, Depression, Relationship Issues, Couple Counseling </p>
        </li>
        <li>Next available at
            <p>Oct 23, 2024 10:00 AM</p>
        </li>
       </ul>
       <button className='counselor-btn'>Book Session</button>
        </div>

        <div className="member">
        <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T0yqq-awgZU6Ka4MbrxW7Dr6H6gpsNq7OA&s" alt="" />
            <h1>Armaan Thakur</h1>
        </div>
       <ul>
        <li>Specialization
            <p>Stress, Anxiety, Depression, Relationship Issues, Couple Counseling </p>
        </li>
        <li>Next available at
            <p>Oct 23, 2024 10:00 AM</p>
        </li>
       </ul>
       <button className='counselor-btn'>Book Session</button>
        </div>


        <div className="member">
        <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFZ4aeaKBrk9PXkmStKzaOUpkkP5k3Lil0Q&s" alt="" />
            <h1>Simran Kaur</h1>
        </div>
       <ul>
        <li>Specialization
            <p>Stress, Anxiety, Depression, Relationship Issues, Couple Counseling </p>
        </li>
        <li>Next available at
            <p>Oct 23, 2024 10:00 AM</p>
        </li>
       </ul>
       <button className='counselor-btn'>Book Session</button>
        </div>

       

      </div>
    </div>
  )
}

export default Counselors
