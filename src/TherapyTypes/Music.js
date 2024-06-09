import React from 'react'
import './music.css'


const Music = () => {
  return (
    <div className='music'>
      <h2 className='music-h2'>“MUSIC doesn’t get in. MUSIC is already in. MUSIC simply uncovers what is there, makes you feel emotions that you didn’t necessarily know you had inside you, and runs around waking them all up. A rebirth of sorts.”</h2>
      <div className="grid-wrapper1">
        <div className='row'>
          <div className="musiccard">
          <iframe width="400"
              height="315"
              src= 
"https://www.youtube.com/embed/G8nNGk6LHaM?si=EENdDh3CXkxRGo2R"
              title="music" > 
      </iframe> 
             
          </div>

          <div className="musiccard">
          <iframe width="400"
              height="315"
              src= 
"https://www.youtube.com/embed/pd8CycEyD1Q?si=_61oEoqjRnGDIt7H"
              title="GeeksforGeeks" > 
      </iframe> 
              
            </div>

          <div className="musiccard">
          <iframe width="400"
              height="315"
              src= 
"https://www.youtube.com/embed/lbS0oXte9Ro?si=KkBDsg_luQzH73ee"
              title="GeeksforGeeks" > 
      </iframe> 
             
          </div>

        </div>

        <div className='row'>
          <div className="musiccard">
          <iframe width="400"
              height="315"
              src= 
"https://www.youtube.com/embed/uy1NOTIzSJQ?si=EDV3W81AT2ZMLRWN"
              title="GeeksforGeeks" > 
      </iframe> 
              
          </div>

          <div className="musiccard">
          <iframe width="400"
              height="315"
              src= 
"https://www.youtube.com/embed/vPvIxwh9N2w?si=viOxLXwrlN3dtnFn"
              title="GeeksforGeeks" > 
      </iframe> 
              
          </div>


          <div className="musiccard">
          <iframe width="400"
              height="315"
              src= 
"https://www.youtube.com/embed/UwltpQ6cw2Q?si=VNvmihdMUDqWpbsy"
              title="GeeksforGeeks" > 
      </iframe> 
             
          </div>

         </div> 
      </div>
  </div>
  )
}

export default Music
