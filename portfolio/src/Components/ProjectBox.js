import React from 'react';
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    WatchListAppDesc: "WatchListApp is a sophisticated platform that allows users to efficiently organize and prioritize their movie collections, add custom comments, and access real-time IMDb ratings through API integration. Developed with Java and Spring Boot, it offers a seamless and responsive user experience.",
    WatchListAppGithub: "https://github.com/harshdesai07/WhatchListApp-Springboot-Project-",
    WatchListAppWebsite: "#",
    
    StudentManagementSystemDesc: "The Student Management System is a Spring Boot application designed to manage student information. This system allows users to add, view, update, and delete student records. The application utilizes a relational database to store data and follows the MVC (Model-View-Controller) design pattern.",
    StudentManagementSystemGithub: "https://github.com/harshdesai07/Student-Management-System-Springboot-",
    StudentManagementSystemWebsite: "#",
    
    BankingSystemDesc: "This project is a simple banking system developed using Java and JDBC (Java Database Connectivity). The system allows users to perform basic banking operations such as creating accounts, managing transactions, and viewing account details. It is designed to showcase the integration of Java with a relational database, demonstrating CRUD (Create, Read, Update, Delete) operations, and transaction management.",
    BankingSystemGithub: "https://github.com/harshdesai07/Banking-System-JDBC-",
    BankingSystemWebsite: "#",
  };
  const githubLink = desc[`${projectName}Github`];
  const websiteLink = desc[`${projectName}Website`];
  const description = desc[`${projectName}Desc`];

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{description}</p>
        <br />

        {/* Conditionally render GitHub button if URL is available */}
        {githubLink && (
          <a href={githubLink} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><FaGithub /> GitHub</button>
          </a>
        )}

        {/* Demo button always displayed if website link is present */}
        {websiteLink && (
          <a href={websiteLink} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><CgFileDocument /> Hosted Link</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;