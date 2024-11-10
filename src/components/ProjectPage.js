// File: src/components/ProjectsPage.js
import React, { useState } from 'react';
import './ProjectPage.css';

function ProjectPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [projectDetails, setProjectDetails] = useState('');

  const projects = [
    {
      title: "Enterprise Automation using Okta Workflows and Workato",
      period: "Jun 2024 - Aug 2024",
      organization: "Rapid7",
      image: "./images/space.jpg",
      summary: "Automated user account provisioning and deprovisioning across global offices, freeing up staff hours and reducing errors.",
      detailsFile: "/debrief/Rapid7.txt",
      skills: "Skills: Data Analysis, Easily Adaptable, Process Automation, Project Management, Okta Administration"
    },
    {
      title: "Back End Development of a Medical CRUD Application",
      period: "Feb 2024 - Apr 2024",
      organization: "Hack.Diversity",
      image: "./images/space.jpg",
      summary: "Developed back-end of a CRUD web application for medical records using the MERN stack, handling over 1000+ records.",
      detailsFile: "/debrief/Rapid7.txt",
      skills: "Skills: Project Management, Web Development, JavaScript, Team Collaboration"
    },
    {
      title: "Plant Phenotyping: Image Analysis of Pear Rootstocks",
      period: "Jun 2022 - Jul 2022",
      organization: "Washington State University",
      image: "./images/space.jpg",
      summary: "Increased phenotyping data collection efficiency by 60%, achieving 97% data accuracy for architectural traits in pear rootstocks.",
      detailsFile: "/debrief/Rapid7.txt",
      skills: "Skills: Data Analysis, Process Automation, Python, PlantCV"
    },
    {
      title: "Phenotyping Analysis: Pearl Millet Panicles",
      period: "Nov 2021 - Feb 2022",
      organization: "University of Massachusetts Boston",
      image: "./images/space.jpg",
      summary: "Automated measurement extraction from Pearl millet panicle images using the PlantCV library, increasing monitoring efficiency by 80%.",
      detailsFile: "/debrief/Rapid7.txt",
      skills: "Skills: Python, Process Automation, Problem Solving, Data Analysis"
    },
    {
      title: "Phenotypic Data Analysis with PlantCV",
      period: "Oct 2020 - Nov 2021",
      organization: "University of Massachusetts Boston",
      image: "./images/space.jpg",
      summary: "Developed a Python script using PlantCV to detect cranberries affected by fruit rot, helping improve breeding programs.",
      detailsFile: "/debrief/Rapid7.txt",
      skills: "Skills: Python, PlantCV"
    }
  ];

  // Function to fetch project details from a file
  const fetchProjectDetails = async (filePath) => {
    try {
      const response = await fetch(filePath);
      const text = await response.text();
      setProjectDetails(text);
    } catch (error) {
      setProjectDetails("Failed to load the project debrief.");
    }
  };

  // Handle card click to show stack layout and fetch details
  const handleCardClick = (project) => {
    if (activeProject === project) {
      setActiveProject(null); // Toggle off if the same project is clicked again
    } else {
      setActiveProject(project);
      fetchProjectDetails(project.detailsFile);
    }
  };

  return (
    <div className={`projects-container ${activeProject ? 'two-columns' : ''}`}>
      {activeProject ? (
        <div className="projects-left">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card no-image"
              onClick={() => handleCardClick(project)}
            >
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card"
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <h4>{project.organization}</h4>
            <p>{project.period}</p>
            <div className="overlay">
              <h4>{project.organization}</h4>
              <p>{project.summary}</p>
            </div>
          </div>
        ))
      )}

      {activeProject && (
        <div className="project-debrief">
          <h2>{activeProject.title}</h2>
          <h3>{activeProject.organization}</h3>
          <p>{activeProject.period}</p>
          <pre>{projectDetails}</pre>
          <button onClick={() => setActiveProject(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
