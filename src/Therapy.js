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
            text="Happiness is a feeling of pleasure and positivity. When someone feels good, proud, excited, relieved or satisfied about something,"
            url="/books"           
            />
            <TherapyData 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ko2m-pfw4gLjThaPTa55M_06kVhL9HmlEA&usqp=CAU"
            heading="MUSIC"
            text="Happiness is a feeling of pleasure and positivity. When someone feels good, proud, excited, relieved or satisfied about something,"
            url="/music"
            />
            <TherapyData 
            image="https://img.freepik.com/premium-vector/cheerful-happy-cute-girl-hand-drawn-cartoon-art-illustration_56104-740.jpg"
            heading="ACTIVITIES"
            text="Happiness is a feeling of pleasure and positivity. When someone feels good, proud, excited, relieved or satisfied about something,"
            url="/games"
            />
            <TherapyData 
            image="https://thumbs.dreamstime.com/b/character-cute-girl-little-cat-holding-blank-board-empty-banner-isolated-white-background-paper-template-193292535.jpg"
            heading="YOGA"
            text="Happiness is a feeling of pleasure and positivity. When someone feels good, proud, excited, relieved or satisfied about something,"
            url="/yoga"
            />
            <TherapyData 
            image="https://thumbs.dreamstime.com/b/character-cute-girl-little-cat-holding-blank-board-empty-banner-isolated-white-background-paper-template-193292535.jpg"
            heading="THERAPIST"
            text="Happiness is a feeling of pleasure and positivity. When someone feels good, proud, excited, relieved or satisfied about something,"
            url="/therapists"
            />
            
        </div>
    </div>
  )
}

export default Therapy
