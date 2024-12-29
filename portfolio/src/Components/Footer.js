import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Harsh Desai</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/harshdesai07" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/harsh-desai-716a47225/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:hdesai29072003@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/harshdesai29/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer