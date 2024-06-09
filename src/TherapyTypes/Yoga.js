import React from 'react'
import './yoga.css'

const Yoga = () => {
  return (
       <div className='yoga'>
              <h1 className='yoga-h1'>YOGA</h1>
                <h2 className='yoga-h2'>Yoga and meditation promote relaxation – the opposite of anxiety, stress and depression</h2>
                <div className="grid-wrapper1">
                  <div className='row'>
                    <div className="yogacard">
                    <iframe width="400"
                        height="315"
                        src= 
"https://www.youtube.com/embed/COp7BR_Dvps?si=dCrpzUqdsrMj4KTx"
                        title="yoga" > 
                </iframe> 
                        <h3>Yoga for Mental Health</h3>
                    </div>

                    <div className="yogacard">
                    <iframe width="400"
                        height="315"
                        src= 
"https://www.youtube.com/embed/Sxddnugwu-8?si=c40MOPoHb4xB5M5Z"
                        title="GeeksforGeeks" > 
                </iframe> 
                        <h3>Yoga for Depression</h3>

                      </div>

                    <div className="yogacard">
                    <iframe width="400"
                        height="315"
                        src= 
"https://www.youtube.com/embed/7cqzSNgNo1M?si=5vBBC2fECgg0ZiKi"
                        title="GeeksforGeeks" > 
                </iframe> 
                        <h3>Yoga for Anxiety Relief</h3>
                    </div>

                  </div>

                  <div className='row'>
                    <div className="yogacard">
                    <iframe width="400"
                        height="315"
                        src= 
"https://www.youtube.com/embed/9MazN_6wdqI?si=1lnCa943q4DxJnAx"
                        title="GeeksforGeeks" > 
                </iframe> 
                        <h3>Stress Melt</h3>
                    </div>

                    <div className="yogacard">
                    <iframe width="400"
                        height="315"
                        src= 
"https://www.youtube.com/embed/xe3D7vKvtok?si=Z7EB7vptduSoHrvz"
                        title="GeeksforGeeks" > 
                </iframe> 
                        <h3>Yoga for Mental Focus</h3>
                    </div>


                    <div className="yogacard">
                    <iframe width="400"
                        height="315"
                        src= 
"https://www.youtube.com/embed/TGdNZTl86Qs?si=-98rl3UGGPMHep9P"
                        title="GeeksforGeeks" > 
                </iframe> 
                        <h3>Stress Relief Yoga</h3>
                    </div>

                   </div> 
                </div>
            </div>
   
  )
}

export default Yoga
