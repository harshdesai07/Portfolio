import React from 'react';

import Lottie from "lottie-react";
import Tilt from 'react-parallax-tilt';
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
Hi, I’m <b>Harsh Desai </b>, a B.Tech candidate in <b>Computer Science and Business Systems (CSBS) </b>with a strong foundation in computing principles and their application in modern business environments. My academic journey has equipped me with skills in <b>software development, data management, and problem-solving,</b> enabling me to tackle technology challenges with a unique blend of technical precision and business insight.  <br/><br/>

I am passionate about creating <b>efficient, user-focused solutions</b> that drive innovation and add value. As I transition into a professional role, I am eager to apply my expertise to <b>meaningful projects</b> while continuing to grow and make a tangible impact in the tech industry.<br/><br/>
          
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, <b>links are in the footer</b>.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>
      
      
    </>
  )
}

export default About