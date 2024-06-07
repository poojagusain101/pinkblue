import React from 'react'
import './css/therapy.css'
import TherapyData from './TherapyData'

const Therapy = () => {
  return (
    
    <div className='therapy'>
       
        <h1>Mind Therapies</h1>
        <p>relax your mind and soul with these...</p>
        <div className="therapycard">
            <TherapyData 
            image="https://img.freepik.com/premium-vector/cute-girl-bring-sunflower-cute-vector-illustration_493693-82.jpg"
            heading="BOOKS/MAGAZINE"
            text="Our carefully selected mental health books offer a wealth of knowledgev and mindfulness, practical tips, including motivational stories and personal narratives that can help you navigate through tough times."
            url="/books"           
            />
            <TherapyData 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ko2m-pfw4gLjThaPTa55M_06kVhL9HmlEA&usqp=CAU"
            heading="MUSIC"
            text="Immerse yourself in music that supports your mental health journey.  Our curated music collection is designed to enhance your mental well-being, offering soothing melodies to help you relax, and find joy. "
            url="/music"
            />
            <TherapyData 
            image="https://img.freepik.com/premium-vector/cheerful-happy-cute-girl-hand-drawn-cartoon-art-illustration_56104-740.jpg"
            heading="ACTIVITIES"
            text="Whether you're looking to de-stress or find a new passion, our activities provide the guidance and inspiration you need. Visit the activities section and start your journey towards a more fulfilling life."
            url="/games"
            />
            <TherapyData 
            image="https://thumbs.dreamstime.com/b/character-cute-girl-little-cat-holding-blank-board-empty-banner-isolated-white-background-paper-template-193292535.jpg"
            heading="YOGA"
            text="Practicing yoga is more than just a physical activity; it's a holistic approach to mental health. Our yoga collection offers guided sessions that promote mindfulness, reduce anxiety, and enhance overall well-being. "
            url="/yoga"
            />
            <TherapyData 
            image="https://i.pinimg.com/736x/1e/2b/8b/1e2b8bbaf4b06a5dc52b237ae152fc52.jpg"
            heading="THERAPIST"
            text="Therapy is more than just talking; it's a pathway to understanding and improving your mental health. Our therapists provide tailored support to help you overcome challenges and achieve a more fulfilling life."
            url="/therapists"
            />
            
        </div>
    </div>
  )
}

export default Therapy
