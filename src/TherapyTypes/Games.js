import React from 'react'
import Navbar from '../navbar'
import './games.css'

const Games = () => {
  return (
    <>
      <div className='games'>
        <Navbar />
        {/* <h1 className='games-h1'>GAMES</h1> */}
        <h2 className='games-h2'>MENTAL HEALTH GAMES AND ACTIVITIES TO BOOST WELL-BEING</h2>
        <div className="grid-wrapper-game">
            <div className="gamescard" style={{backgroundColor:"orange"}}>
              <h3>GRATITUDE JOURNALING</h3>
              <img src="https://cupikdesign.com/cdn/shop/files/GJi2-1_95fbe5ff-8968-47b4-80ce-cc943dd05d4b.jpg?v=1707987706" alt="" />
              <p>
              <h4>The Activity:</h4>Mindfulness coloring is a relaxing and creative activity that helps calm the mind and reduce stress. By focusing on coloring intricate patterns and designs, you can temporarily divert your attention away from negative thoughts and emotions, promoting a sense of tranquility.
              <h4>How It Helps:</h4>This activity encourages mindfulness by cultivating present-moment awareness and helps individuals develop better concentration and focus. It also provides an outlet for self-expression and creativity, which can boost self-esteem and overall mental well-being.
              </p>
              
            </div>

            <div className="gamescard" style={{backgroundColor:"teal"}}>

              <h3>AFFIRMATION CARDS</h3>
              <img src="https://i.pinimg.com/originals/ec/94/c4/ec94c42f7f4a23679975fdca163ec479.jpg" alt="" />
              <p>
              <h4>The Activity:</h4>Affirmation cards are a collection of positive statements that encourage self-belief and confidence. Individuals can create their own cards or purchase a pre-made set, and use them daily to reinforce positive thoughts and beliefs.
              <h4>How It Helps:</h4>Affirmation cards help individuals challenge negative thoughts and replace them with positive beliefs, improving self-esteem and emotional well-being. By regularly focusing on uplifting and empowering messages, individuals can cultivate a more positive mindset and enhance their mental health.
              </p>
             
            </div>

            <div className="gamescard" style={{backgroundColor:"red"}}>

              <h3>ART & CRAFT THERAPY</h3>
              <img src="https://img.etimg.com/thumb/msid-101948494,width-480,height-360,imgsize-1554077,resizemode-75/what-happens-during-an-art-therapy-session.jpg" alt="" />
              <p>
              <h4>The Activity:</h4>Art therapy involves engaging in creative activities, such as drawing, painting, or sculpting, to express emotions, thoughts, and experiences. Participants can work individually or in groups, guided by a trained art therapist or through self-directed exploration.
              <h4>How It Helps:</h4>Art therapy provides a non-verbal outlet for emotional expression and self-discovery. It can help individuals process complex emotions, reduce stress, and promote personal growth. Engaging in creative activities can also foster mindfulness, enhance self-awareness, and improve overall mental health.
              </p>
             
            </div>

            <div className="gamescard" style={{backgroundColor:"olive"}}>

              <h3> CARE FOR HOUSEPLANTS</h3>
              <img src="https://res.akamaized.net/domain/image/upload/t_web/c_crop,h_1001,w_1023,x_0,y_237/v1684371287/DOMAIN_GARDENING_Tammy_Huynh_21_vsn2ub.jpg" alt="" />
              <p>
              <h4>The Activity:</h4>Engaging in nurturing activities such as taking care of houseplants can be soothing. From watering them to ensuring they get the right amount of sunlight, there’s something profoundly calming about tending to plants.
              <h4>How It Helps:</h4> Caring for houseplants promotes mindfulness, responsibility, and a connection with nature. The act of nurturing life fosters a sense of achievement and provides a calming routine for your brain. It’s an activity that can enhance your environment and your mental health.
              </p>
             
            </div>

            <div className="gamescard" style={{backgroundColor:"purple"}}>

              <h3>MINDFUL LISTENING</h3>
              <img src="https://nova-live.imgix.net//migration-MindfulListeningIMGT.jpg" alt="" />
              <p>
              <h4>The Activity:</h4>Mindful listening involves paying close attention to sounds around you without judgement or distraction. This exercise can be practiced in a variety of settings, such as listening to nature sounds, music, or even the hum of household appliances.
              <h4>How It Helps:</h4> Mindful listening helps improve concentration, focus, and present-moment awareness. By developing the ability to tune into the present moment, individuals can reduce anxiety, enhance emotional regulation, and improve overall mental well-being.
              </p>

            </div>
          </div>
        </div>
    </>
  )
}

export default Games
