import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/student.png';
import RogfreeImage from '../images/building.png';
import WigglesImage from '../images/watchlist.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="WatchListApp" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="StudentManagementSystem"/>
        <ProjectBox projectPhoto={RogfreeImage} projectName="BankingSystem"/>
        
      </div>

    </div>
  )
}

export default Projects